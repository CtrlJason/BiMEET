import serial
import threading
import json
import time
import requests
from datetime import datetime
from collections import deque

# --- CONFIGURACIÓN SERIAL (AJUSTA TU PUERTO COM AQUÍ) ---
PUERTO_SERIAL = 'COM3' # <--- VERIFICA ESTO
BAUD_RATE = 115200

# --- CONFIGURACIÓN DEL SERVIDOR REMOTO ---
SERVER_URL = 'https://w8rlt68n-3000.use2.devtunnels.ms/api/sensor/data'

# Intenta inicializar la conexión serial
try:
    ser = serial.Serial(PUERTO_SERIAL, BAUD_RATE, timeout=1)
    print(f"✅ Conectado a {PUERTO_SERIAL} a {BAUD_RATE} baudios.")
except serial.SerialException as e:
    print(f"❌ ERROR: No se pudo abrir el puerto serial {PUERTO_SERIAL}.")
    print(f"Detalle del error: {e}")
    ser = None

# Variables globales
pisadas_totales = 0

# SISTEMA DE COLAS PARA ENVÍO AL SERVIDOR
cola_envio = deque()  # Cola de pisadas pendientes de enviar
enviando_datos = False  # Flag para saber si está enviando


def enviar_al_servidor(data_json):
    """Envía los datos al servidor remoto via HTTP POST"""
    try:
        response = requests.post(
            SERVER_URL,
            json=data_json,
            headers={'Content-Type': 'application/json'},
            timeout=5
        )
        if response.status_code in [200, 201]:
            print(f"  ✅ Enviado al servidor exitosamente")
            return True
        else:
            print(f"  ⚠️ Error del servidor: {response.status_code}")
            return False
    except Exception as e:
        print(f"  ❌ Error al enviar: {e}")
        return False


def procesar_cola_envio():
    """Hilo dedicado a procesar la cola de envío (sin bloquear)"""
    global enviando_datos

    while True:
        # Si no hay nada en la cola, esperar
        if len(cola_envio) == 0:
            time.sleep(0.1)
            continue

        # Si ya está enviando, esperar
        if enviando_datos:
            time.sleep(0.1)
            continue

        # Marcar que estamos enviando
        enviando_datos = True

        # Obtener la primera pisada de la cola
        pisada = cola_envio.popleft()

        print(f"📤 Procesando cola ({len(cola_envio)} pendientes)")

        # Intentar enviar
        exitoso = enviar_al_servidor(pisada)

        # Si falló, volver a encolar
        if not exitoso:
            print("  🔄 Reintentando en próximo ciclo...")
            cola_envio.appendleft(pisada)  # Volver al inicio de la cola
            time.sleep(2)  # Esperar 2 segundos antes de reintentar

        # Marcar que terminamos de enviar
        enviando_datos = False


def leer_serial():
    """Hilo para leer datos del puerto serial."""
    global pisadas_totales

    if ser is None:
        print("El hilo serial no se iniciará debido a un error de conexión.")
        return

    while True:
        try:
            linea = ser.readline().decode().strip()

            # Lógica de Detección de Pisada
            if linea:
                try:
                    data = json.loads(linea)
                    if data.get("pisadas", 0) > 0:
                        pisadas_totales += 1

                        print(f"👣 Pisada #{pisadas_totales} detectada → encolada")

                        # ENCOLAR PARA ENVÍO (no bloqueante)
                        cola_envio.append(data)

                except json.JSONDecodeError:
                    pass

        except serial.SerialException as e:
            print(f"⚠️ Conexión serial perdida: {e}. Reintentando en 5s...")
            time.sleep(5)
            continue
        except Exception as e:
            print(f"❌ Error desconocido: {e}")

        time.sleep(0.05)


if __name__ == '__main__':
    print("\n=== Sistema BiMEET Iniciado ===")
    print(f"📡 Puerto Serial: {PUERTO_SERIAL}")
    print(f"🌐 Servidor Remoto: {SERVER_URL}")
    print("================================\n")

    # Hilo para leer el puerto serial
    hilo_serial = threading.Thread(target=leer_serial, daemon=True)
    hilo_serial.start()

    # Hilo para procesar la cola de envío
    hilo_envio = threading.Thread(target=procesar_cola_envio, daemon=True)
    hilo_envio.start()

    # Mantener el script corriendo
    try:
        while True:
            time.sleep(1)
    except KeyboardInterrupt:
        print("\n\n👋 Sistema detenido por el usuario")
        print("✅ Cerrando conexión serial...")
        if ser:
            ser.close()

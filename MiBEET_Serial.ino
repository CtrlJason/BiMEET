#include <Arduino.h>
#include <ArduinoJson.h>

// Sensor
#define PULSADOR_PIN 4
const unsigned long DEBOUNCE_MS = 200;

volatile int contadorPisadas = 0;
volatile unsigned long ultimaPisadaISR = 0;
unsigned long inicioMillis = 0;

// ============================================
// INTERRUPCIÓN
// ============================================
void IRAM_ATTR contarPisada()
{
  unsigned long ahora = millis();
  if (ahora - ultimaPisadaISR > DEBOUNCE_MS)
  {
    contadorPisadas++;
    ultimaPisadaISR = ahora;
  }
}

// ============================================
// OBTENER TIMESTAMP
// ============================================
void obtenerFechaHora(char* fecha, char* hora)
{
  unsigned long segundosTot = (millis() - inicioMillis) / 1000;
  unsigned int horas = (segundosTot / 3600) % 24;
  unsigned int mins = (segundosTot / 60) % 60;
  unsigned int segs = segundosTot % 60;

  // Fecha actual (ajustar manualmente)
  sprintf(fecha, "2025-01-26");
  sprintf(hora, "%02u:%02u:%02u", horas, mins, segs);
}

// ============================================
// SETUP
// ============================================
void setup()
{
  Serial.begin(115200);
  delay(1000);

  Serial.println("\n=================================");
  Serial.println("  Monitor BiMEET - Modo Serial");
  Serial.println("=================================");

  pinMode(PULSADOR_PIN, INPUT_PULLUP);
  attachInterrupt(digitalPinToInterrupt(PULSADOR_PIN), contarPisada, FALLING);

  inicioMillis = millis();

  Serial.println("✅ Sistema listo!");
  Serial.println("Enviando datos por puerto serial.\n");
}

// ============================================
// LOOP PRINCIPAL
// ============================================
void loop()
{
  static int ultimoContador = 0;

  // Si hay una nueva pisada, enviarla por serial
  if (contadorPisadas > ultimoContador)
  {
    ultimoContador = contadorPisadas;

    char fecha[12];
    char hora[10];
    obtenerFechaHora(fecha, hora);

    // Crear JSON
    StaticJsonDocument<256> doc;
    doc["pisadas"] = 1; // Siempre 1 por cada pisada individual
    doc["fecha"] = fecha;
    doc["hora"] = hora;

    // Enviar por Serial
    serializeJson(doc, Serial);
    Serial.println(); // Nueva línea para separar mensajes

    Serial.printf("👣 Pisada #%d enviada por serial\n", contadorPisadas);
  }

  delay(10);
}

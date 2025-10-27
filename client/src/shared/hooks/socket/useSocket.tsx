import { useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';
import toast from 'react-hot-toast';
import { WifiOff } from 'lucide-react';
import { SensorData } from '../types/socket/socket.ds';
import { playSuccessSound } from '../../utils/sound';

export const useSocket = () => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [sensorData, setSensorData] = useState<SensorData | null>(null);
  const [allPisadas, setAllPisadas] = useState<SensorData[]>([]);

  useEffect(() => {
    // URL del backend
    const SOCKET_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

    // Crear conexión de Socket.IO
    const socketInstance = io(SOCKET_URL, {
      transports: ['websocket', 'polling'],
      reconnection: true,
      reconnectionAttempts: 5,
      reconnectionDelay: 1000,
    });

    // Evento: Conexión exitosa
    socketInstance.on('connect', () => {
      console.log('✅ Conectado al servidor Socket.IO:', socketInstance.id);
      setIsConnected(true);

      // Reproducir sonido de éxito (sin notificación visual)
      if (window.location.pathname.startsWith('/dashboard')) {
        playSuccessSound();
      }
    });

    // Evento: Desconexión - Solo notificar si estamos en rutas privadas
    socketInstance.on('disconnect', () => {
      console.log('❌ Desconectado del servidor Socket.IO');
      setIsConnected(false);

      // Solo notificar si estamos en una ruta privada (dashboard)
      if (window.location.pathname.startsWith('/dashboard')) {
        toast.error(
          <div className="flex items-center gap-3">
            <WifiOff className="w-5 h-5 text-red-500" />
            <div>
              <p className="font-semibold">Conexión perdida</p>
              <p className="text-sm text-gray-600">No se recibirán datos en tiempo real</p>
            </div>
          </div>,
          {
            duration: 5000,
          }
        );
      }
    });

    // Evento: Mensaje de bienvenida
    socketInstance.on('connection', (data) => {
      console.log('📡 Mensaje del servidor:', data);
    });

    // Evento: Datos del sensor en tiempo real
    socketInstance.on('sensor-data', (data: SensorData) => {
      console.log('📥 Datos recibidos:', data);
      setSensorData(data);

      // Agregar a la lista de todas las pisadas (mantener últimas 100)
      setAllPisadas((prev) => {
        const updated = [data, ...prev];
        return updated.slice(0, 100);
      });
    });

    // Evento: Error de conexión
    socketInstance.on('connect_error', (error) => {
      console.error('❌ Error de conexión Socket.IO:', error);
      setIsConnected(false);
    });

    setSocket(socketInstance);

    // Cleanup al desmontar
    return () => {
      socketInstance.disconnect();
    };
  }, []);

  return {
    socket,
    isConnected,
    sensorData,
    allPisadas,
  };
};

import { Socket } from 'socket.io-client';

// Tipo de datos que recibe del sensor
export type SensorData = {
  id: string;
  fecha: string;
  hora: string;
  timestamp: Date;
  numeroPisada: number;
};

// Contexto de Socket.IO
export type SocketContextType = {
  socket: Socket | null;
  isConnected: boolean;
  sensorData: SensorData | null;
  allPisadas: SensorData[];
};

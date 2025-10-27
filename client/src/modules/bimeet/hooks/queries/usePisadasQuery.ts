import { useQuery } from '@tanstack/react-query';
import { sensorApi, type HistorialParams } from '../../../../services/sensor/sensorApi';

export const usePisadasQuery = (params: HistorialParams) => {
  return useQuery({
    queryKey: ['pisadas', params],
    queryFn: () => sensorApi.getHistorial(params),
    staleTime: 30000, // Datos frescos por 30 segundos
    refetchOnWindowFocus: false,
  });
};

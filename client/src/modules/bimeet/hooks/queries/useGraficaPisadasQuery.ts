import { useQuery } from '@tanstack/react-query';
import { sensorApi } from '../../../../services/sensor/sensorApi';

export const useGraficaPisadasQuery = (fecha?: string) => {
  return useQuery({
    queryKey: ['grafica-pisadas', fecha],
    queryFn: () => sensorApi.getGraficaPorHora(fecha),
    staleTime: 60000, // Datos frescos por 60 segundos
    refetchOnWindowFocus: false,
  });
};

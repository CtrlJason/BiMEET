import { useQuery } from '@tanstack/react-query';
import { sensorApi } from '../../../../services/sensor/sensorApi';

export const useStatsQuery = (refetchInterval?: number) => {
  return useQuery({
    queryKey: ['stats'],
    queryFn: () => sensorApi.getStats(),
    staleTime: 30000,
    refetchInterval: refetchInterval,
    refetchOnWindowFocus: false,
  });
};

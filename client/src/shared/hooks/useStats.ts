import { useState, useEffect } from 'react';
import { sensorApi } from '../../services/sensor/sensor.service';
import type { Stats } from '../types/api/api.ds';

export const useStats = (autoFetch: boolean = true, refreshInterval?: number) => {
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchStats = async () => {
    setLoading(true);
    setError(null);

    try {
      const data = await sensorApi.getStats();
      setStats(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al cargar estadísticas');
      console.error('Error fetching stats:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (autoFetch) {
      fetchStats();
    }
  }, [autoFetch]);

  useEffect(() => {
    if (refreshInterval && refreshInterval > 0) {
      const interval = setInterval(fetchStats, refreshInterval);
      return () => clearInterval(interval);
    }
  }, [refreshInterval]);

  return {
    stats,
    loading,
    error,
    refetch: fetchStats,
  };
};

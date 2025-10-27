import { useState, useEffect } from 'react';
import { sensorApi } from '../../services/sensor/sensor.service';
import type { GraficaPorHora } from '../types/api/api.ds';

export const useGraficaPisadas = (fecha?: string) => {
  const [grafica, setGrafica] = useState<GraficaPorHora | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchGrafica = async (fechaParam?: string) => {
    setLoading(true);
    setError(null);

    try {
      const data = await sensorApi.getGraficaPorHora(fechaParam);
      setGrafica(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al cargar gráfica');
      console.error('Error fetching grafica:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGrafica(fecha);
  }, [fecha]);

  return {
    grafica,
    loading,
    error,
    refetch: fetchGrafica,
  };
};

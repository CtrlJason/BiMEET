import { useState, useEffect } from 'react';
import { sensorApi, type HistorialParams } from '../../services/sensor/sensor.service';
import type { Pisada, PaginationInfo } from '../types/api/api.ds';

export const usePisadas = (initialParams: HistorialParams = {}) => {
  const [pisadas, setPisadas] = useState<Pisada[]>([]);
  const [pagination, setPagination] = useState<PaginationInfo>({
    page: 1,
    limit: 10,
    total: 0,
    totalPages: 0,
    hasNextPage: false,
    hasPrevPage: false,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [params, setParams] = useState<HistorialParams>(initialParams);

  const fetchPisadas = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await sensorApi.getHistorial(params);
      setPisadas(response.data);
      setPagination(response.pagination);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al cargar pisadas');
      console.error('Error fetching pisadas:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPisadas();
  }, [params]);

  const updateParams = (newParams: Partial<HistorialParams>) => {
    setParams((prev) => ({ ...prev, ...newParams }));
  };

  const goToPage = (page: number) => {
    updateParams({ page });
  };

  const setRowsPerPage = (limit: number) => {
    updateParams({ limit, page: 1 });
  };

  const setFiltroFecha = (fecha: string) => {
    updateParams({ fecha, page: 1 });
  };

  const clearFiltroFecha = () => {
    updateParams({ fecha: undefined, page: 1 });
  };

  const setSorting = (sortBy: string, sortOrder: 'asc' | 'desc') => {
    updateParams({ sortBy, sortOrder });
  };

  const refetch = () => {
    fetchPisadas();
  };

  return {
    pisadas,
    pagination,
    loading,
    error,
    goToPage,
    setRowsPerPage,
    setFiltroFecha,
    clearFiltroFecha,
    setSorting,
    refetch,
  };
};

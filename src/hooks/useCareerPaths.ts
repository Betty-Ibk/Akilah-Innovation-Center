import { useState, useEffect } from 'react';
import { CareerPath } from '../data/careerPaths/types';
import { careerPathService } from '../services/api/careerPath.service';
import { PaginationParams, PaginatedResponse } from '../services/api/types';

interface UseCareerPathsResult {
  careerPaths: CareerPath[];
  loading: boolean;
  error: Error | null;
  total: number;
  page: number;
  totalPages: number;
  hasMore: boolean;
  fetchCareerPaths: (params: PaginationParams) => Promise<void>;
}

export function useCareerPaths(initialParams: PaginationParams): UseCareerPathsResult {
  const [data, setData] = useState<PaginatedResponse<CareerPath>>({
    items: [],
    total: 0,
    page: 1,
    totalPages: 1,
    hasMore: false
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchCareerPaths = async (params: PaginationParams) => {
    try {
      setLoading(true);
      const response = await careerPathService.getCareerPaths(params);
      setData(response);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to fetch career paths'));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCareerPaths(initialParams);
  }, []);

  return {
    careerPaths: data.items,
    loading,
    error,
    total: data.total,
    page: data.page,
    totalPages: data.totalPages,
    hasMore: data.hasMore,
    fetchCareerPaths
  };
}
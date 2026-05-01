import { useQuery } from '@tanstack/react-query';
import { WeatherApi } from '../entities/api/weather.service.ts';

import type { WeatherResponse } from '../entities';

export const useWeather = (city: string) => {
  return useQuery({
    queryKey: ['q', city],
    queryFn: (): Promise<WeatherResponse> => WeatherApi.getCurrent(city),
    enabled: !!city,
    staleTime: 1000 * 60 * 10, // 10 хвилин дані вважаються актуальними
  });
};

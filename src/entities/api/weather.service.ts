import type { SearchResponse, WeatherResponse } from '../model';
import weatherClient from '../../api/weatherClient.ts';

export const WeatherApi = {
  getCurrent: async (city: string): Promise<WeatherResponse> => {
    const { data } = await weatherClient.get<WeatherResponse>('current.json', {
      params: { q: city },
    });
    return data;
  },

  search: async (query: string): Promise<SearchResponse[]> => {
    const { data } = await weatherClient.get<SearchResponse[]>('search.json', {
      params: { q: query },
    });
    return data;
  },
};

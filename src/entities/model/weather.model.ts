export interface WeatherResponse {
  location: { name: string; country: string };
  current: {
    temp_c: number;
    condition: { text: string; icon: string };
    wind_kph: number;
    humidity: number;
  };
}

export interface SearchResponse {
  id: number;
  name: string;
  region: string;
}

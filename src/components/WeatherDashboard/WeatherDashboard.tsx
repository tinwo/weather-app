import { useWeather } from '../../hooks';

export const WeatherDashboard = ({ city }: { city: string }) => {
  console.log('VITE_KEY:', import.meta.env.VITE_WEATHER_KEY);
  const { data: weather, isLoading, isError } = useWeather(city);

  if (isLoading) return <div className="p-8 text-gray-400 font-light">Завантаження...</div>;
  if (isError) return <div className="p-8 text-red-300">Помилка завантаження даних</div>;
  if (!weather) return null;

  return (
    <div className="max-w-md mx-auto bg-white border border-gray-100 rounded-[2.5rem] p-10 shadow-sm hover:shadow-md transition-shadow">
      <header className="flex justify-between items-start">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900">{weather.location.name}</h2>
          <p className="text-gray-400 text-sm tracking-wide uppercase mt-1">{weather.location.country}</p>
        </div>
        <img src={weather.current.condition.icon} alt="weather" className="w-16 h-16" />
      </header>

      <div className="mt-12 flex items-baseline">
        <span className="text-8xl font-light tracking-tighter text-gray-900">
          {Math.round(weather.current.temp_c)}°
        </span>
      </div>

      <footer className="mt-12 grid grid-cols-2 gap-4 border-t border-gray-50 pt-8">
        <div className="text-sm">
          <span className="text-gray-400 block">Стан</span>
          <span className="font-medium text-gray-700">{weather.current.condition.text}</span>
        </div>
        <div className="text-sm">
          <span className="text-gray-400 block">Вологість</span>
          <span className="font-medium text-gray-700">{weather.current.humidity}%</span>
        </div>
      </footer>
    </div>
  );
};

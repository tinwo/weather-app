import './App.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Components
import { WeatherDashboard } from './components/WeatherDashboard/WeatherDashboard.tsx';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <WeatherDashboard city={'Kyiv'}></WeatherDashboard>
    </QueryClientProvider>
  );
}

export default App;

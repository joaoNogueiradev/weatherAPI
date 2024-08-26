import { createContext, useContext, useState } from "react"
import { WeatherData } from "../types/WeatherData"
import { openWeatherApi } from "../services/instances/openWeather"

export type WeatherContextData = {
  search: string;   
  setSearch: (value: string) => void;
  weather: WeatherData | undefined;
  showCard: boolean;
  iconUrl: string;
  windDeg: number;
  searchPressed: () => Promise<void>;
  isLoadingWeather: boolean;
  errorMessage: string;
};

const WeatherContextDefaultValue: WeatherContextData = {
  search: '',
  setSearch: () => null,
  weather: undefined,
  showCard: false,
  iconUrl: '',
  windDeg: 0,
  searchPressed: async () => undefined,
  isLoadingWeather: false,
  errorMessage: '',
};


export const WeatherContext = createContext<WeatherContextData>({...WeatherContextDefaultValue})

export type WeatherProviderProps = {
    children:React.ReactNode
}

const apiKey = import.meta.env.VITE_API_KEY

export const WeatherProvider = ({children}:WeatherProviderProps) => {
    const [search, setSearch] = useState('');
    const [weather, setWeather] = useState<WeatherData>({})
    const [showCard, setShowCard] = useState(false);
    const [isLoading, setIsLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState('');

  

  const searchPressed = async () => {
    console.log("searchPressed called");
    setIsLoading(true);
    setErrorMessage('');
    try {
      const response = await fetch(`${openWeatherApi.base}weather?q=${search}&units=metric&APPID=${apiKey}`);
        if (!response.ok) {
          if (response.status === 404) {
            setErrorMessage("City not found");
          } else {
            setErrorMessage("Error searching for weather data");
          }
            setShowCard(false);
            return;
          }
      const result: WeatherData = await response.json();
        setWeather(result);
        setShowCard(true);
      } catch (error) {
          console.error(error);
          setErrorMessage("Error searching for weather data");
          setShowCard(false);
      } finally {
          setIsLoading(false);
      }
  };
  
  
  
  const iconCode = weather?.weather && weather.weather[0]?.icon ? weather.weather[0].icon : "01d";
  const iconUrl = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
  const windDeg = weather.wind?.deg ?? 0;

  return (
    <WeatherContext.Provider value={{ iconUrl, search, setSearch, showCard, weather, windDeg, searchPressed, isLoadingWeather: isLoading, errorMessage }}>
      {children}
    </WeatherContext.Provider>
  );
}

export const useWeather = () => {
  return useContext(WeatherContext)
}
import { createContext, useContext, useState } from "react";
import { CityWeather } from "../../../types/cityWeather";
import axios from "axios";

interface WeatherContextProps {
  currentLocation: CityWeather;
  loading: boolean;
  error: string;
  getWeather: (lat: number, lon: number) => void;
}

const EMPTY_LOCATION: CityWeather = {
  airPressure: 0,
  city: "",
  coord: {
    lat: 0,
    lon: 0,
  },
  forecast: [],
  humidity: 0,
  visibility: 0,
  weather: {
    icon: "",
    temp: 0,
  },
  wind: {
    deg: 0,
    speed: 0,
  },
};

const WeatherContext = createContext<WeatherContextProps>({
  currentLocation: EMPTY_LOCATION,
  loading: false,
  error: "",
  getWeather: () => {},
});

const WeatherContextProvider = ({ children }: React.PropsWithChildren) => {
  const [currentLocation, setCurrentLocation] =
    useState<CityWeather>(EMPTY_LOCATION);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const getWeather = (lat: number, lon: number) => {
    setLoading(true);
    setError('')

    console.log(process.env.NEXT_PUBLIC_API_URL)
    console.log(process.env.OPENWEATHER_KEY)

    // const response = axios.get(
    //   `api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${process.env}`
    // ).then(data => console.log(data));

    setLoading(false);
  };


  return (
    <WeatherContext.Provider
      value={{ currentLocation, error, loading, getWeather }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherContextProvider;

export const useWeatherContext = () => useContext(WeatherContext);


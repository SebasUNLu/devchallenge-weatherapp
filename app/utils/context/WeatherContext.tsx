import { createContext, useContext, useState } from "react";
import { CityWeather } from "../../../types/cityWeather";
import axios, { AxiosError, isAxiosError } from "axios";

interface WeatherContextProps {
  currentLocation: CityWeather | null;
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
  currentLocation: null,
  loading: false,
  error: "",
  getWeather: () => {},
});

const WeatherContextProvider = ({ children }: React.PropsWithChildren) => {
  const [currentLocation, setCurrentLocation] = useState<CityWeather | null>(
    null
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  type GetCityWeather = {
    message: string;
    cityWeather: CityWeather;
  };

  const getWeather = async (lat: number, lon: number) => {
    setLoading(true);
    setError("");
    try {
      console.log("getting info...");
      await axios
        .get<GetCityWeather>(`/api/weather?lat=${lat}&lon=${lon}`)
        .then((res) => res.data)
        .then((data) => {
          console.log(data.cityWeather);
          setCurrentLocation(data.cityWeather);
        });
    } catch (error) {
      if (isAxiosError(error)) console.log(error.response?.data.message);
      else console.log(error);
    } finally {
      setLoading(false);
    }
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

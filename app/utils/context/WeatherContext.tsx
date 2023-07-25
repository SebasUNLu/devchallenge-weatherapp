import { createContext, useContext, useEffect, useState } from "react";
import { CityWeather } from "../../../types/cityWeather";
import axios, { AxiosError, isAxiosError } from "axios";
import { CityData, CityList } from "@/types/CityData";

const MOCKUP_CITYLIST: CityList = [
  {
    name: "Lujan",
    coord: {
      lat: -34.570278,
      lon: -59.105,
    },
  },
  {
    name: "Lujiawan",
    coord: {
      lon: 106.583481,
      lat: 36.374409,
    },
  },
  {
    name: "Santa Rosa Jauregui",
    coord: {
      lon: -100.449997,
      lat: 20.73333,
    },
  },
];

interface WeatherContextProps {
  currentLocation: CityWeather | null;
  loading: boolean;
  error: string;
  cityList: CityList;
  // TODO cambiar esto 
  // getWeather: (lat: number, lon: number) => void;
  getWeather: (city: string) => void;
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
    main: ''
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
  cityList: MOCKUP_CITYLIST,
  getWeather: () => {},
});

const WeatherContextProvider = ({ children }: React.PropsWithChildren) => {
  const [currentLocation, setCurrentLocation] = useState<CityWeather | null>(
    null
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    // TODO cambiar para que sea el actual
    getWeatherMOCK('Lujiawan');
  }, []);

  type GetCityWeather = {
    message: string;
    cityWeather: CityWeather;
  };

  const getWeatherMOCK =async(city: string)=>{
    setLoading(true);
    setError("");
    try {
      console.log("getting info...");
      await axios
        .get<GetCityWeather>(`/api/weather/${city}`)
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
  }

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
      value={{
        currentLocation,
        error,
        loading,
        // TODO cambiar esto
        getWeather: getWeatherMOCK,
        cityList: MOCKUP_CITYLIST,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherContextProvider;

export const useWeatherContext = () => useContext(WeatherContext);

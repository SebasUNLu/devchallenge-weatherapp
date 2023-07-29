import { createContext, useContext, useEffect, useState } from "react";
import { CityWeather } from "../../../types/cityWeather";
import axios, { AxiosError, isAxiosError } from "axios";
import { CityData, CityList } from "@/types/CityData";
import listOfCoords from "../../utils/cityList/city.list.json";

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
  limitCallsReached: boolean;
  getWeather: (lat: number, lon: number) => void;
  getCurrentLocationWeather: () => void;
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
    main: "",
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
  cityList: listOfCoords as CityList,
  limitCallsReached: false,
  getWeather: () => {},
  getCurrentLocationWeather: () => {},
});

const WeatherContextProvider = ({ children }: React.PropsWithChildren) => {
  const [currentLocation, setCurrentLocation] = useState<CityWeather | null>(
    null
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [limitCallsReached, setLimitCallsReached] = useState(false);

  useEffect(() => {
    getCurrentLocationWeather();
    // setLoading(false)
  }, []);

  type GetCityWeather = {
    message: string;
    cityWeather: CityWeather;
  };

  const getWeather = async (lat: number, lon: number) => {
    setLimitCallsReached(false);
    setLoading(true);
    setError("");
    try {
      await axios
        .get<GetCityWeather>(`/api/weather?lat=${lat}&lon=${lon}`)
        .then((res) => res.data)
        .then((data) => {
          setCurrentLocation(data.cityWeather);
        });
    } catch (error) {
      if (isAxiosError(error)) {
        if (error.response?.status === 403) {
          console.log("means there are no more calls");
          setLimitCallsReached(true);
        } else setError(error.response?.data.message);
      } else setError("Ha ocurrido un error. Vuelva a intentarlo más tarde");
    } finally {
      setLoading(false);
    }
  };

  const getCurrentLocationWeather = () => {
    setLoading(true);
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const { latitude, longitude } = pos.coords;
        await getWeather(latitude, longitude);
        setLoading(false);
      },
      () => {
        setError("No se ha podido cargar la información de su ubicación.");
        setLoading(false);
      }
    );
  };

  return (
    <WeatherContext.Provider
      value={{
        currentLocation,
        error,
        loading,
        limitCallsReached,
        getWeather,
        getCurrentLocationWeather,
        cityList: listOfCoords as CityList,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherContextProvider;

export const useWeatherContext = () => useContext(WeatherContext);

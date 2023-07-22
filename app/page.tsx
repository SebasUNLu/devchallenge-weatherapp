"use client";

import { CityWeather } from "@/types/cityWeather";
import { useWeatherContext } from "./utils/context/WeatherContext";
import axios from "axios";

type GetCityWeather = {
  message: string;
  weather: CityWeather;
};

export default function Home() {
  const { getWeather } = useWeatherContext();

  const handleClick = async () => {
    navigator.geolocation.getCurrentPosition(async (pos) => {
      const { latitude, longitude } = pos.coords;
      await axios
        .get<GetCityWeather>(`/api/weather?lat=${latitude}&lon=${longitude}`)
        .then((res) => res.data)
        .then((data) => console.log(data))
        .catch((e) => console.log(e));
    });
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button className="p-2 rounded bg-green-800" onClick={handleClick}>
        press me
      </button>
    </main>
  );
}

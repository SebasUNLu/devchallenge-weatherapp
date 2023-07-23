"use client";

import MainPage from "./components/MainPage/MainPage";
import { useWeatherContext } from "./utils/context/WeatherContext";

export default function Home() {
  const { getWeather, currentLocation } = useWeatherContext();

  const handleClick = () => {
    navigator.geolocation.getCurrentPosition((pos) => {
      const { latitude, longitude } = pos.coords;
      getWeather(latitude, longitude);
    }, (error) => {
      console.log('salio mal lo del position :(')
      console.log(error)
    });
  };

  return (
    <main className="flex min-h-screen flex-col items-center">
      <MainPage />
    </main>
  );
}

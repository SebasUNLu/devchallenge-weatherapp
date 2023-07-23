"use client";

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
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {
        currentLocation && <h1 className="font-bold text-lg">{currentLocation.city}</h1>
      }
      <button className="p-2 rounded bg-green-800" onClick={handleClick}>
        press me
      </button>
    </main>
  );
}

"use client";

import MainPage from "./components/MainPage/MainPage";
import { useWeatherContext } from "./utils/context/WeatherContext";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <MainPage />
    </main>
  );
}

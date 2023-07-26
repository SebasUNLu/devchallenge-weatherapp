"use client";

import MainPage from "./components/MainPage/MainPage";
import WeatherDiv from "./components/WeatherInfoDiv/WeatherInfoDiv";
import { useWeatherContext } from "./utils/context/WeatherContext";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <MainPage />
      {/* Div where all the info is shown */}
      <WeatherDiv />
    </main>
  );
}

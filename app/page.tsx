"use client";

import MainPage from "./components/MainPage/MainPage";
import WeatherDiv from "./components/WeatherInfoDiv/WeatherInfoDiv";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center lg:flex-row">
      <MainPage />
      {/* Div where all the info is shown */}
      <div className="h-full w-full bg-[#100E1D] lg:h-screen lg:overflow-auto">
        <WeatherDiv />
      </div>
    </main>
  );
}

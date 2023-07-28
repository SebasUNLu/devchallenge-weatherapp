"use client";

import React from "react";
import UnitsOptions from "./UnitsOptions";
import ForecastSection from "./forecast section/ForecastSection";
import { useWeatherContext } from "@/app/utils/context/WeatherContext";
import WeatherInfoLoader from "../Loaders/WeatherInfoLoader";
import HighlightSection from "./highlights section/HighlightSection";
const WeatherInfoDiv = () => {
  const { loading, limitCallsReached } = useWeatherContext();

  if (loading) return <WeatherInfoLoader />;

  return (
    <div className="w-full h-full p-4 lg:max-w-3xl lg:m-auto">
      {limitCallsReached ? (
        <div className="text-white w-full h-full flex flex-col justify-center items-center">
          <div className="text-red-500 font-bold text-7xl ">X</div>
          <p className="text-center">
            El servidor no toma más consultas. Por favor, vuelva a intentar mañana.
          </p>
        </div>
      ) : (
        <>
          {/* Div Celcius or Farenheit options */}
          <UnitsOptions />
          {/* Div forecast */}
          <ForecastSection />
          {/* Div 4 info */}
          <HighlightSection />
          {/* Footer */}
          <div className="w-full pb-4 mt-16 flex justify-center items-center text-[#A09FB1] gap-2">
            created by
            <a
              target="_blank"
              href="https://github.com/SebasUNLu"
              className="underline font-bold"
            >
              Sebastián Marchetti
            </a>
            <p>-</p>
            <a
              target="_blank"
              href="https://devchallenges.io/paths/front-end-developer"
            >
              devChallenges.io
            </a>
          </div>
        </>
      )}
    </div>
  );
};

export default WeatherInfoDiv;

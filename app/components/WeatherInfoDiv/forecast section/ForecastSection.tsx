"use client";

import { useWeatherContext } from "@/app/utils/context/WeatherContext";
import React from "react";
import ForecastCard from "./ForecastCard";

const ForecastSection = () => {
  const { currentLocation } = useWeatherContext();
  return (
    <div className="w-full max-w-xl lg:max-w-full lg:w-full grid grid-cols-2 lg:flex gap-6 lg:gap-0 justify-between m-auto">
      {currentLocation?.forecast.map((fore, index) => {
        return <ForecastCard forecast={fore} tomorrowFlag={index === 0} key={`forecast_${index}`} />;
      })}
    </div>
  );
};

export default ForecastSection;

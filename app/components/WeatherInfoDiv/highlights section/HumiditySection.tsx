"use client";

import { useWeatherContext } from "@/app/utils/context/WeatherContext";
import React from "react";

const HumiditySection = () => {
  const { currentLocation } = useWeatherContext();
  if (!currentLocation) return <p>No current Humidity loaded</p>;

  const { humidity } = currentLocation;

  return (
    <div className="text-white w-full flex flex-col justify-center items-center bg-[#1E213A] p-6 gap-6">
      <h2 className="font-medium text-base">Humidity</h2>
      {/* Porcentaje */}
      <div className="font-normal text-4xl flex gap-2">
        <p className="font-bold text-5xl">{humidity}</p>%
      </div>
      {/* Barra de porcentaje */}
      <div className="w-full max-w-xs flex flex-col">
        <div className="w-full flex justify-between">
          <p className="text-[#A09FB1] font-bold text-base">0</p>
          <p className="text-[#A09FB1] font-bold text-base">50</p>
          <p className="text-[#A09FB1] font-bold text-base">100</p>
        </div>
        <div className="w-full h-4 relative rounded-full bg-[#E7E7EB]">
          <div
            style={{ width: `${humidity}%` }}
            className="rounded-full h-full bg-[#FFEC65] absolute"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default HumiditySection;

"use client";

import { useWeatherContext } from "@/app/utils/context/WeatherContext";
import React from "react";

const AirSection = () => {
  const { currentLocation } = useWeatherContext();

  if (!currentLocation) return <p>No current Air Pressure loaded</p>;
  const { airPressure } = currentLocation;

  return (
    <div className="text-white w-full h-full max-w-sm flex flex-col justify-center items-center bg-[#1E213A] p-6 gap-6">
      <h2 className="font-medium text-base">Air Pressure</h2>
      {/* air pressure */}
      <div className="font-normal text-4xl flex gap-2">
        <p className="font-bold text-5xl">{airPressure}</p>mb
      </div>
    </div>
  );
};

export default AirSection;

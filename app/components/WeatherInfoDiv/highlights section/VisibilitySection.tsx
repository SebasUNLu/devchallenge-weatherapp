"use client";

import { useWeatherContext } from "@/app/utils/context/WeatherContext";
import React from "react";

const VisibilitySection = () => {
  const { currentLocation } = useWeatherContext();

  if (!currentLocation) return <p>No current Visibility loaded</p>;

  const MILE = 0.000621371
  const { visibility } = currentLocation;
  
  return (
    <div className="text-white w-full h-full max-w-sm flex flex-col justify-center items-center bg-[#1E213A] p-6 gap-6">
      <h2 className="font-medium text-base">Visibility</h2>
      {/* miles */}
      <div className="font-normal text-4xl flex gap-2">
        <p className="font-bold text-5xl">{(visibility * MILE).toPrecision(2)}</p>miles
      </div>
    </div>
  );
};

export default VisibilitySection;

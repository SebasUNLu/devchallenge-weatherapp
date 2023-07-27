"use client";

import { useWeatherContext } from "@/app/utils/context/WeatherContext";
import React, { useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";

const WindSection = () => {
  const { currentLocation } = useWeatherContext();

  if (!currentLocation) return <p>No current Wind loaded</p>;

  const { deg, speed } = currentLocation?.wind;

  const getWindDirection = (degrees: number) => {
    if (degrees >= 0 && degrees < 11.25) return "N";
    if (degrees >= 11.25 && degrees < 33.75) return "NNE";
    if (degrees >= 33.75 && degrees < 56.25) return "NE";
    if (degrees >= 56.25 && degrees < 78.75) return "ENE";
    if (degrees >= 78.75 && degrees < 101.25) return "E";
    if (degrees >= 101.25 && degrees < 123.75) return "ESE";
    if (degrees >= 123.75 && degrees < 146.25) return "SE";
    if (degrees >= 146.25 && degrees < 168.75) return "SSE";
    if (degrees >= 168.75 && degrees < 191.25) return "S";
    if (degrees >= 191.25 && degrees < 213.75) return "SSW";
    if (degrees >= 213.75 && degrees < 236.25) return "SW";
    if (degrees >= 236.25 && degrees < 258.75) return "WSW";
    if (degrees >= 258.75 && degrees < 281.25) return "W";
    if (degrees >= 281.25 && degrees < 303.75) return "WNW";
    if (degrees >= 303.75 && degrees < 326.25) return "NW";
    if (degrees >= 326.25 && degrees < 348.75) return "NNW";
    return "N";
  };

  const degreesStyle = `rotate-[` + deg + `deg]`;

  return (
    <div className="text-white w-full flex flex-col justify-center items-center bg-[#1E213A] p-6 gap-6">
      <h2 className="font-medium text-base">Wind Status</h2>
      <div className="flex items-center font-base text-4xl">
        <p className="font-bold text-5xl mr-2">{speed}</p>
        mph
      </div>
      <div className="flex items-center gap-2">
        <FaArrowCircleUp
          style={{ transform: `rotate(${deg}deg)` }}
          className={`w-6 h-6 color-white `}
        />
        <p className="font-base text-sm">{getWindDirection(deg)}</p>
      </div>
    </div>
  );
};

export default WindSection;

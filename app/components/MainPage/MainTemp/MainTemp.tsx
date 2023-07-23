"use client";

import { useWeatherContext } from "@/app/utils/context/WeatherContext";
import React from "react";
import { MdGpsFixed } from "react-icons/md";

const MainTemp = () => {
  const { currentLocation, loading } = useWeatherContext();

  const handleClick = () => {
    console.log("open search bar...");
  };

  return (
    <div className="w-full min-h-screen bg-[#1E213A] flex flex-col">
      {/* search div */}
      <div className="w-full p-2 flex justify-between items-center">
        <button className="p-2 rounded bg-[#6E707A] shadow-lg" onClick={handleClick}>
          Search for places
        </button>
        <button className="bg-[#6E707A] rounded-full p-2">
          <MdGpsFixed className="h-6 w-6" color="white" height={22} width={22} />
        </button>
      </div>
      {/*  */}
    </div>
  );
};

export default MainTemp;

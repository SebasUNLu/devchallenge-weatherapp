"use client";

import { useWeatherContext } from "@/app/utils/context/WeatherContext";
import React, { useState } from "react";
import { MdGpsFixed } from "react-icons/md";
import TempDiv from "./TempDiv";
import SearchDiv from "./SearchDiv";

const MainTemp = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const { error } = useWeatherContext();

  const handleClick = () => {
    setMenuOpen(true);
  };

  return (
    <>
      <div className="w-full min-h-screen bg-[#1E213A] flex flex-col relative">
        {/* search div */}
        <div className="w-full p-2 flex justify-between items-center">
          <button
            className="p-2 rounded bg-[#6E707A] hover:bg-[#6E707AAA] text-white shadow-md"
            onClick={handleClick}
          >
            Search for places
          </button>
          <button className="bg-[#6E707A] rounded-full p-2">
            <MdGpsFixed
              className="h-6 w-6"
              color="white"
              height={22}
              width={22}
            />
          </button>
        </div>
        {/* Temp Div */}
        {error ? (
          <div className="text-white font-semibold bg-[#1E213A] m-auto w-full p-4 h-full flex flex-col justify-center items-center">
            <div className="text-red-500 font-bold text-7xl">X</div>
            <p className="text-center">{error}</p>
          </div>
        ) : (
          <TempDiv />
        )}
        {/* Search Menu */}
        <SearchDiv open={menuOpen} callbackFnc={() => setMenuOpen(false)} />
      </div>
    </>
  );
};

export default MainTemp;

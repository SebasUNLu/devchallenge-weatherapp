"use client";

import React from "react";
import MainTemp from "./MainTemp/MainTemp";
import { useWeatherContext } from "@/app/utils/context/WeatherContext";
import MainLoader from "../Loaders/MainLoader";

const MainPage = () => {
  const { loading, limitCallsReached, error } = useWeatherContext();

  if (loading) return <MainLoader />;

  return (
    <div className="w-full lg:w-2/5 h-full">
      {limitCallsReached ? (
        <div className="text-white w-full min-h-screen bg-[#1E213A] flex flex-col justify-center items-center p-2">
          <div className="text-red-500 font-bold text-7xl ">X</div>
          <p className="text-center">
            El servidor no toma más consultas. Por favor, vuelva a intentar
            mañana.
          </p>
        </div>
      ) : (
        <MainTemp />
      )}
    </div>
  );
};

export default MainPage;

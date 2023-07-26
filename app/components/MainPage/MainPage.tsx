"use client";

import React from "react";
import MainTemp from "./MainTemp/MainTemp";
import { useWeatherContext } from "@/app/utils/context/WeatherContext";
import MainLoader from "../Loaders/MainLoader";

const MainPage = () => {
  const { loading } = useWeatherContext();

  if (loading) return <MainLoader />;

  return (
    <div className="w-full h-full">
      {loading ? <MainLoader /> : <MainTemp />}
    </div>
  );
};

export default MainPage;

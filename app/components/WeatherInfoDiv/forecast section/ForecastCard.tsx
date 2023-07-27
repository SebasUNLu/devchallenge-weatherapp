"use client";

import { getDateAsStringFromString } from "@/app/utils/GetDateAsString";
import generateIcon from "@/app/utils/WeatherIconGenerator";
import { ForecastedWeatherItem } from "@/types/cityWeather";
import Image from "next/image";
import React from "react";

interface ForecastCardProps {
  forecast: ForecastedWeatherItem;
  tomorrowFlag?: boolean;
}

const ForecastCard = ({
  forecast,
  tomorrowFlag = false,
}: ForecastCardProps) => {
  const { date, icon, temp_max, temp_min } = forecast;
  return (
    <div className="bg-[#1E213A] text-white my-4 p-2 flex flex-col items-center">
      {tomorrowFlag ? 'Tomorrow' : getDateAsStringFromString(date)}
      <Image src={generateIcon(icon)} alt="icon_weather" className="w-20 h-20" />
      <div className="w-full flex justify-evenly">
        <p>º{temp_max}</p>
        <p>º{temp_min}</p>
      </div>
    </div>
  );
};

export default ForecastCard;

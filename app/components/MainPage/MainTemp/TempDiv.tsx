"use client";

import React, { useState } from "react";

import cloudBG from "@/public/Cloud-background.png";
import rainIcon from "@/public/weather_icons/Thunderstorm.png";
import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";
import { useWeatherContext } from "@/app/utils/context/WeatherContext";
import generateIcon from "../../../utils/WeatherIconGenerator";
import { DAYS, MONTHS } from "@/app/utils/Days&Months";
import { getTodayAsString } from "@/app/utils/GetDateAsString";

const TempDiv = () => {
  const { currentLocation } = useWeatherContext();

  if (!currentLocation) return <h1>Weather not loaded</h1>;

  return (
    <div className="h-[500px] w-full justify-evenly flex flex-col">
      {/* Icon and cloud bg */}
      <div
        className={`w-full min-h-[200px] relative flex justify-center items-center`}
      >
        <Image
          src={cloudBG}
          alt="background image"
          className="cloudBackground max-w-xs w-full"
        />
        <Image
          src={generateIcon(currentLocation?.weather.icon)}
          width={150}
          height={150}
          alt="icon"
          className="z-10"
        />
      </div>
      {/* Temp ºC */}
      <div className="flex justify-center items-center font-bold text-[80px] text-white">
        {currentLocation.weather.temp}{" "}
        <p className="font-extralight text-5xl text-[#A09FB1]">ºC</p>
      </div>
      {/* Temp weather (rain, sun, etc) */}
      <h1 className="font-semibold text-4xl text-[#A09FB1] self-center">
        {currentLocation.weather.main}
      </h1>
      {/* Today . day */}
      {/* <h2 className="self-center text-[#88869D]">Today · Fri, 5 Jun</h2> */}
      <h2 className="self-center text-[#88869D]">
        {getTodayAsString()}
      </h2>
      {/* Location */}
      <div className="flex items-center justify-center text-[#88869D]">
        <FaLocationDot height={24} width={24} /> {currentLocation.city}
      </div>
    </div>
  );
};

export default TempDiv;

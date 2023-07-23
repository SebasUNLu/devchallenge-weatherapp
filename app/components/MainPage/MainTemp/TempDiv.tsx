import React from "react";

import cloudBG from "@/public/Cloud-background.png";
import rainIcon from "@/public/weather_icons/Thunderstorm.png";
import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";

const TempDiv = () => {
  return (
    <div className="h-full w-full flex flex-col">
      {/* Icon and cloud bg */}
      <div
        className={`w-full min-h-[200px] relative flex justify-center items-center`}
      >
        <Image
          src={cloudBG}
          alt="background image"
          className="cloudBackground"
        />
        <Image
          src={rainIcon}
          width={150}
          height={150}
          alt="icon"
          className="z-10"
        />
      </div>
      {/* Temp ºC */}
      <div className="flex justify-center items-center font-bold text-[120px] text-white">
        15 <p className="font-extralight text-5xl text-[#A09FB1]">ºC</p>
      </div>
      {/* Temp weather (rain, sun, etc) */}
      <h1 className="font-semibold text-4xl text-[#A09FB1] self-center">
        Thunderstorm
      </h1>
      {/* Today . day */}
      <h2 className="self-center text-[#88869D]">Today · Fri, 5 Jun</h2>
      {/* Location */}
      <div className="flex items-center justify-center text-[#88869D]">
        <FaLocationDot height={24} width={24} /> Luján
      </div>
    </div>
  );
};

export default TempDiv;

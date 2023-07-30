import React from "react";
import { ThreeDots } from "react-loader-spinner";

const WeatherInfoLoader = () => {
  return (
    <div className="bg-[#100E1D] w-full min-h-screen flex flex-col justify-center items-center text-white">
      <div className="">
        <ThreeDots />
      </div>
      Cargando información del clima...
    </div>
  );
};

export default WeatherInfoLoader;

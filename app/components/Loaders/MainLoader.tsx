import React from "react";
import { ThreeDots } from "react-loader-spinner";

const MainLoader = () => {
  return (
    <div className="bg-[#1E213A] w-full lg:w-2/5 min-h-screen flex flex-col justify-center items-center text-white">
      <div className="">
        <ThreeDots />
      </div>
      Cargando información del clima...
    </div>
  );
};

export default MainLoader;

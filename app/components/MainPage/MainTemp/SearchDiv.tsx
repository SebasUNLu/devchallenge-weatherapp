"use client";

import { useWeatherContext } from "@/app/utils/context/WeatherContext";
import { CityList } from "@/types/CityData";
import React, { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { IoIosArrowForward } from "react-icons/io";

interface SeachDivProps {
  open?: boolean;
  callbackFnc?: () => void;
}

const SearchDiv = ({ open = false, callbackFnc }: SeachDivProps) => {
  const { cityList } = useWeatherContext();
  const openStyle = open ? "left-0" : "left-[-100%]";
  const [inputValue, setInputValue] = useState("");
  const [filteredCities, setFilteredCities] = useState<CityList>([]);

  const handleClick = () => {
    if (callbackFnc) callbackFnc();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const searchCities = () => {
    if (!inputValue) {
      setFilteredCities([]);
      return;
    }
    const filteredResults = cityList.filter((city) => {
      if (city.name.toLowerCase().match(inputValue.toLowerCase())) return true;
      return false;
    });
    setFilteredCities(filteredResults);
  };

  return (
    <div
      className={`fixed flex flex-col w-full h-full top-0 bg-[#1E213A] transition-all duration-200 z-20 ${openStyle}`}
    >
      {/* Close menu button */}
      <div className="w-full flex p-2 justify-end">
        <RxCross2
          width={28}
          height={28}
          className="cursor-pointer font-bold h-6 w-6"
          onClick={handleClick}
        />
      </div>
      {/* Input and button search */}
      <div className="">
        <input type="text" onChange={handleChange} value={inputValue} />
        <button className="" onClick={searchCities}>
          Search
        </button>
      </div>
      {/* List of cities */}
      <div className="p-2">
        {filteredCities.map((city, index) => {
          return (
            <CitySearchItem
              name={city.name}
              coord={city.coord}
              key={`cityItem_${index}`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SearchDiv;

interface CitySearchItemProps {
  name: string;
  coord: {
    lat: number;
    lon: number;
  };
}

const CitySearchItem = ({ name, coord }: CitySearchItemProps) => {
  const { getWeather } = useWeatherContext();
  const handleclick = () => {
    // TODO Funcionalidad para que tome las coordenadas
    getWeather(name)
  };

  return (
    <div className="w-full flex justify-between my-2" onClick={handleclick}>
      <h1 className="text-white">{name}</h1>
      <IoIosArrowForward className={`w-6 h-6 `} color="white" />
    </div>
  );
};

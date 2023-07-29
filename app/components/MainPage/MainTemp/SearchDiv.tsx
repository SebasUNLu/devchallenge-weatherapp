"use client";

import { useWeatherContext } from "@/app/utils/context/WeatherContext";
import { CityList } from "@/types/CityData";
import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { IoIosArrowForward } from "react-icons/io";
import { FaMagnifyingGlass } from "react-icons/fa6";

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
      className={`fixed lg:absolute flex flex-col w-full h-full p-2 top-0 bg-[#1E213A] transition-all duration-200 z-20 ${openStyle}`}
    >
      {/* Close menu button */}
      <div
        className="w-full flex cursor-pointer p-2 mb-6 justify-end"
        onClick={handleClick}
      >
        <RxCross2
          width={28}
          height={28}
          color="white"
          className="cursor-pointer font-bold h-6 w-6"
        />
      </div>
      {/* Input and button search */}
      <div className="h-12 w-full flex gap-3">
        <div className="w-full h-full relative">
          <input
            className="w-full h-full text-[#616475] border border-[#E7E7EB] font-medium text-base pl-12 bg-[#1E213A]"
            type="text"
            onChange={handleChange}
            value={inputValue}
            placeholder="search location"
          />
          <FaMagnifyingGlass className="w-6 h-6 absolute top-0 bottom-0 my-auto left-3 text-[#616475]" />
        </div>
        <button
          className="h-full text-white bg-[#3C47E9] hover:bg-[#3C47E9AA] p-3 font-semibold text-base transition-all duration-200"
          onClick={searchCities}
        >
          Search
        </button>
      </div>
      {/* List of cities */}
      <div className="p-2 mt-2 overflow-auto">
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
  const { lat, lon } = coord;
  const [hovered, setHovered] = useState(false);

  const handleclick = () => {
    getWeather(lat, lon);
  };

  return (
    <div
      className="w-full flex justify-between text-[#616475] my-2 py-5 px-3 cursor-pointer border border-transparent hover:border-1 hover:border-[#616475] transition-all duration-200"
      onClick={handleclick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <h1 className="text-white">{name}</h1>
      <IoIosArrowForward
        className={`w-6 h-6 transition-all duration-200 ${
          hovered ? "" : "hidden"
        }`}
      />
    </div>
  );
};

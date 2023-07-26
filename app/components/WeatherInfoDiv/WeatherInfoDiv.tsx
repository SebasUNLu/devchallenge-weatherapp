'use client'

import React from 'react';
import UnitsOptions from './UnitsOptions';
import ForecastSection from './forecast section/ForecastSection';
import { useWeatherContext } from '@/app/utils/context/WeatherContext';
import WeatherInfoLoader from '../Loaders/WeatherInfoLoader';
const WeatherInfoDiv = () => {
  
  const{loading} = useWeatherContext()

  if(loading) return <WeatherInfoLoader />

  return (
    <div className='w-full p-4 bg-[#100E1D]'>
      {/* Div Celcius or Farenheit options */}
      <UnitsOptions />
      {/* Div forecast */}
      <ForecastSection />
      {/* Div 4 info */}
    </div>
  );
};

export default WeatherInfoDiv;
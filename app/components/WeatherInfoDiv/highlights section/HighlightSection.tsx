'use client'

import { useWeatherContext } from '@/app/utils/context/WeatherContext';
import React from 'react';
import WindSection from './WindSection';
import HumiditySection from './HumiditySection';

const HighlightSection = () => {
  const {currentLocation} = useWeatherContext()
  return (
    <div className='flex flex-col w-full gap-8'>
      <p className='text-white font-bold text-2xl'>Today's Highlights</p>
      {/* wind status */}
      <WindSection />
      {/* humidity */}
      <HumiditySection />
      {/* visibility */}
      {/* wind air pressure */}
    </div>
  );
};

export default HighlightSection;
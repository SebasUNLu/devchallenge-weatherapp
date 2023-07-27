'use client'

import { useWeatherContext } from '@/app/utils/context/WeatherContext';
import React from 'react';
import WindSection from './WindSection';

const HighlightSection = () => {
  const {currentLocation} = useWeatherContext()
  return (
    <div className='flex flex-col w-full'>
      {/* wind status */}
      <WindSection />
      {/* humidity */}
      {/* visibility */}
      {/* wind air pressure */}
    </div>
  );
};

export default HighlightSection;
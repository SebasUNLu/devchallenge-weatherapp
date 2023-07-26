import React from 'react';
import UnitsOptions from './UnitsOptions';

const WeatherInfoDiv = () => {
  return (
    <div className='w-full h-[200px] p-4'>
      {/* Div Celcius or Farenheit options */}
      <UnitsOptions />
      {/* Div forecast */}
      {/* Div 4 info */}
    </div>
  );
};

export default WeatherInfoDiv;
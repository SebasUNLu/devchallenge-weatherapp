import React from 'react';

const UnitsOptions = () => {
  return (
    <div className='w-full flex gap-2'>
      <button className='rounded-full text-white font-bold text-lg bg-[#585676]'>ºC</button>
      <button className='rounded-full text-white font-bold text-lg bg-[#585676]'>ºF</button>
    </div>
  );
};

export default UnitsOptions;
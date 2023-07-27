import React from 'react';

const UnitsOptions = () => {
  return (
    <div className='w-full flex gap-4 justify-end'>
      <button className='rounded-full text-white font-bold text-lg bg-[#585676] hover:bg-[#585676AA] px-2 py-1'>ºC</button>
      <button className='rounded-full text-white font-bold text-lg bg-[#585676] hover:bg-[#585676AA] px-2 py-1'>ºF</button>
    </div>
  );
};

export default UnitsOptions;
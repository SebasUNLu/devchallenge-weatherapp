import React from 'react';
import MainTemp from './MainTemp/MainTemp';

const MainPage = () => {
  return (
    <div className='w-full h-full'>
      <MainTemp />
      <div className='w-full h-[200px] bg-green-900'></div>
    </div>
  );
};

export default MainPage;
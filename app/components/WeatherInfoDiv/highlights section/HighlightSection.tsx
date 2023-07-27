import React from 'react';
import WindSection from './WindSection';
import HumiditySection from './HumiditySection';
import VisibilitySection from './VisibilitySection';
import AirSection from './AirSection';

const HighlightSection = () => {
  return (
    <div className='flex flex-col w-full gap-8'>
      <p className='text-white font-bold text-2xl'>Today's Highlights</p>
      {/* wind status */}
      <WindSection />
      {/* humidity */}
      <HumiditySection />
      {/* visibility */}
      <VisibilitySection />
      {/* wind air pressure */}
      <AirSection />
    </div>
  );
};

export default HighlightSection;
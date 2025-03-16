
import React from 'react';

const BioinformaticsBackground: React.FC = () => {
  return (
    <div 
      className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden"
      style={{ opacity: 0.15 }}
    >
      <div id="dna" className="absolute top-1/2 left-1/2 w-full h-60 -mt-30 -ml-1/2 perspective-1000">
        {Array(30).fill(null).map((_, index) => (
          <div key={index} className="dna-strand"></div>
        ))}
      </div>
    </div>
  );
};

export default BioinformaticsBackground;

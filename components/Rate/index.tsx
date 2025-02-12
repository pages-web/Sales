import React, { useState } from 'react';
import RateComponent from './RateComponent';

function getType(rate: number, value: number): string {
  if (rate <= value) return 'full';
  if (rate - 0.5 <= value) return 'half';
  return 'empty';
}

interface RateProps {
  value: number;
  onChange: (value: number) => void;
}

const Rate: React.FC<RateProps> = ({ value, onChange }) => {
  const [hoverRating, setHoverRating] = useState(0);

  const handleRatingClick = (ratingOnHover: number) => {
    onChange(ratingOnHover);
  };

  return (
    <div className="flex items-center" onMouseLeave={() => setHoverRating(0)}>
      {Array(5)
        .fill(0)
        .map((_, index) => {
          index = index + 1;
          return (
            <React.Fragment key={index}>
              <RateComponent
                color={'#ffc107'}
                size={24}
                type={getType(index, hoverRating || value)}
                onClick={(v) => handleRatingClick(v)}
                rate={index}
                onMouseEnter={(v) => setHoverRating(v)}
              />
            </React.Fragment>
          );
        })}
    </div>
  );
};

export default Rate;

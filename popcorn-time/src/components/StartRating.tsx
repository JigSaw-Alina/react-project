import { useState } from 'react';
import type { StartRatingProps } from '../types/Movie';
import Star from './Start';

const StarRating = ({ maxRating = 5 }: StartRatingProps) => {
  const [rating, setRating] = useState<number>(0);
  const [tempRating, setTempRating] = useState<number | null>(null);

  const handleRating = (value: number): void => {
    setRating(value);
  };

  return (
    <div>
      <div style={{ color: 'red' }}>
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            key={i}
            color="#fcc419"
            full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
            onRate={() => handleRating(i + 1)}
            onHover={() => setTempRating(i + 1)}
            onHoverOut={() => setTempRating(0)}
          />
        ))}
        <p style={{ color: 'red' }}>{tempRating || rating || ''}</p>
      </div>
    </div>
  );
};

export default StarRating;

// ,
//   className = '',
//   messages = [],
//   defaultRating = 0,

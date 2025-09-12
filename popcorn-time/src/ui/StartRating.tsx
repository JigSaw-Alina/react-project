import { useState } from 'react';
import Star from './Start';
import { SizeKey } from '@/ui/config/sizes';

export type StartRatingProps = {
  maxRating: number;
  defaultRating: number;
  color: string;
  size?: SizeKey;
};

const StarRating = ({
  maxRating = 5,
  color = '#fcc419',
  size = 'sm',
  defaultRating = 0,
}: StartRatingProps) => {
  const [rating, setRating] = useState<number>(defaultRating);
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
            full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
            onRate={() => handleRating(i + 1)}
            onHover={() => setTempRating(i + 1)}
            onHoverOut={() => setTempRating(0)}
            size={size}
            color={color}
          />
        ))}
        <p style={{ color: 'red' }}>{tempRating || rating || ''}</p>
      </div>
    </div>
  );
};

export default StarRating;

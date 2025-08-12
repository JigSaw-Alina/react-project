import type { FriendProps } from '../types/item';
import Button from './Button';

const Friend = ({ friend, onSelection, isSelected }: FriendProps) => {
  const { name, img, balance } = friend;
  return (
    <li className={isSelected ? 'selected' : ''}>
      <img src={img} alt={name} />
      <h3>{name}</h3>

      {balance < 0 && (
        <div className="red">
          You owe {name} {Math.abs(balance)}
        </div>
      )}
      {balance > 0 && (
        <div className="red">
          {name} owe you {Math.abs(balance)}
        </div>
      )}

      {balance === 0 && <p>You and {name} are even</p>}

      <Button onclick={() => onSelection(friend)}>
        {isSelected ? 'Close' : 'Select'}
      </Button>
    </li>
  );
};

export default Friend;

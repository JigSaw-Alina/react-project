import type { Items as ItemTypes } from '../types/item';

const Item = ({ description, quantity, packed }: ItemTypes) => {
  return (
    <li className="app__list-item">
      <span className={`app__item ${packed ? 'app-item-packed' : ''}`}>
        {quantity} {description}
      </span>
      <button className="app__remove-btn">❌</button>
    </li>
  );
};

export default Item;

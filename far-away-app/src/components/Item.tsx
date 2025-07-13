import type { ItemProps } from '../types/item';

const Item = ({
  id,
  description,
  quantity,
  packed,
  onDeleteItems,
  onToggleItem,
}: ItemProps) => {
  return (
    <li className="app__list-item">
      <input
        type="checkbox"
        checked={packed}
        onChange={() => onToggleItem(id)}
      />
      <span className={`app__item ${packed ? 'item-packed' : ''}`}>
        {quantity}
        {description}
      </span>
      <button onClick={() => onDeleteItems(id)} className="app__remove-btn">
        ❌
      </button>
    </li>
  );
};

export default Item;

import Item from './Item';
import type { ItemType, PackingListProps } from '../types/item';
import { useState } from 'react';

const PackingList = ({
  items,
  onDeleteItems,
  onToggleItem,
  onClearItems,
}: PackingListProps) => {
  const [sortBy, setSortBy] = useState('packed');

  let sortedItems: ItemType[] = [];

  switch (sortBy) {
    case 'input':
      sortedItems = items;
      break;
    case 'description':
      sortedItems = [...items].sort((a, b) =>
        a.description.localeCompare(b.description)
      );
      break;
    case 'packed':
      sortedItems = [...items].sort(
        (a, b) => Number(a.packed) - Number(b.packed)
      );
      break;
    default:
      sortedItems = items;
  }

  return (
    <div>
      <ul className="app__list">
        {sortedItems.map((item) => (
          <Item
            {...item}
            key={item.id}
            onDeleteItems={onDeleteItems}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onClearItems}>Clear list</button>
      </div>
    </div>
  );
};

export default PackingList;

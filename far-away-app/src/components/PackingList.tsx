import type { Items as ItemType } from '../types/item';
import Item from './Item';

type ItemProps = {
  initialItems: ItemType[];
};

const PackingList = ({ initialItems }: ItemProps) => {
  return (
    <ul className="app__list">
      {initialItems.map((item) => (
        <Item {...item} key={item.id} />
      ))}
    </ul>
  );
};

export default PackingList;

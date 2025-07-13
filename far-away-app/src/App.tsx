import { useState } from 'react';
import Form from './components/Form';
import Logo from './components/Logo';
import PackingList from './components/PackingList';
import type { ItemType } from './types/item';
import Stats from './components/Stats';

const App = () => {
  const [items, setItems] = useState<ItemType[]>([]);

  const handleItem = (item: ItemType) => {
    setItems((prevItems) => [...prevItems, item]);
  };

  const handleToggleItem = (id: number) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  const handleClearItems = () => {
    const confirmed = window.confirm(
      'Are you sure you want to delete all items?'
    );
    if (confirmed) setItems([]);
  };

  const handDeleteItem = (id: number) => {
    setItems((prevItems) => prevItems.filter((item) => id !== item.id));
  };
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleItem} />
      <PackingList
        items={items}
        onDeleteItems={handDeleteItem}
        onToggleItem={handleToggleItem}
        onClearItems={handleClearItems}
      />
      <Stats items={items} />
    </div>
  );
};

export default App;

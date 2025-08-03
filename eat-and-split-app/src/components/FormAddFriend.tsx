import type { FormEvent } from 'react';
import { useState } from 'react';
import Button from './Button';
import type { FormAddFriendProps } from '../types/item';

const FormAddFriend = ({ onAddFriends }: FormAddFriendProps) => {
  const [name, setName] = useState('');
  const [img, setImg] = useState('https://i.pravatar.cc/48');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !img) return;
    const newFriend = {
      id: crypto.randomUUID(),
      name: name.trim(),
      img: img.trim(),
      balance: 0,
    };

    onAddFriends(newFriend);
    setName('');
    setImg('');
  };

  return (
    <form className="App__form" onSubmit={handleSubmit}>
      <label>👩🏼‍🤝‍🧑🏻 Friend Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>🖼 Image URL</label>
      <input type="text" value={img} onChange={(e) => setImg(e.target.value)} />
      <Button>Add</Button>
    </form>
  );
};

export default FormAddFriend;

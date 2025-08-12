import type { friendsType } from '../types/item';

const id = crypto.randomUUID();

export const initialFriends: friendsType[] = [
  {
    id: id,
    name: 'Clark',
    img: 'https://i.pravatar.cc/48?u=112323',
    balance: -7,
  },
  {
    id: id,
    name: 'Sarah',
    img: 'https://i.pravatar.cc/48?u=933372',
    balance: 20,
  },
  {
    id: id,
    name: 'Anthony',
    img: 'https://i.pravatar.cc/48?u=499476',
    balance: 0,
  },
];

export type friendsType = {
  id: string;
  name: string;
  img: string;
  balance: number;
};

export type FriendsListProps = {
  friends: friendsType[];
  onSelection: (friend: friendsType) => void;
  selectedFriend: friendsType | null;
};

export type FriendProps = {
  friend: friendsType;
  onSelection: (friend: friendsType) => void;
  isSelected: boolean;
};

export type FormAddFriendProps = {
  onAddFriends: (initialFriend: friendsType) => void;
};

export type FromSplitBillProps = {
  selectedFriend: friendsType;
};

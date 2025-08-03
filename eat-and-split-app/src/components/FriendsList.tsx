import type { FriendsListProps } from '../types/item';
import Friend from './Friend';

const FriendsList = ({
  friends,
  onSelection,
  selectedFriend,
}: FriendsListProps) => {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          key={friend.id}
          friend={friend}
          isSelected={selectedFriend?.id === friend.id}
          onSelection={onSelection}
        />
      ))}
    </ul>
  );
};

export default FriendsList;

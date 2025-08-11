import { useState } from 'react';
import Button from './components/Button';
import FormSplitBill from './components/FormSplitBill';
import FriendsList from './components/FriendsList';
import { initialFriends } from './data/items';
import type { friendsType } from './types/item';
import FormAddFriend from './components/FormAddFriend';

const App = () => {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddfriend, setShowAddfriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState<friendsType | null>(
    null
  );

  const handleFried = (friends: friendsType) => {
    setFriends((prevFriends) => [...prevFriends, friends]);
    setShowAddfriend(false);
  };

  const handleShowFriend = () => {
    setShowAddfriend((show) => !show);
  };

  const handleSelection = (friend: friendsType) => {
    setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend));
    setShowAddfriend(false);
  };
  return (
    <div className="App">
      <div className="App__sidebar">
        <FriendsList
          friends={friends}
          onSelection={handleSelection}
          selectedFriend={selectedFriend}
        />
        {showAddfriend && <FormAddFriend onAddFriends={handleFried} />}
        <Button onclick={handleShowFriend}>
          {showAddfriend ? 'Close' : 'Add Friend'}
        </Button>
      </div>
      {selectedFriend && <FormSplitBill selectedFriend={selectedFriend} />}
    </div>
  );
};

export default App;

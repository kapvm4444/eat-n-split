import initialFriends from "./initialFriends";
import FriendList from "./components/FriendList";
import { useState } from "react";
import Button from "./components/Button";
import FormAddFriend from "./components/FormAddFriend";
import FormSplitBill from "./components/FormSplitBill";

export default function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [currentFriend, setCurrentFriend] = useState(null);

  function handleShowAddFriend() {
    setShowAddFriend((val) => !val);
  }

  function handleAddFriend(newFriend) {
    setFriends((friends) => [...friends, newFriend]);
    setShowAddFriend(false);
  }

  function handleCurrentFriend(friend) {
    setCurrentFriend((cur) => (cur?.id === friend.id ? null : friend));
  }

  function handleUpdateFriendBalance(val) {
    setFriends((friends) =>
      friends.map((friend) =>
        currentFriend.id === friend.id
          ? { ...friend, balance: friend.balance + val }
          : friend,
      ),
    );

    setCurrentFriend(null);
  }

  return (
    <div className="app">
      <div className="sidebar">
        {/*Friend List*/}
        <FriendList
          friends={friends}
          onSelectFriend={handleCurrentFriend}
          currentFriend={currentFriend}
        />

        {/*Add Friend Form*/}
        {showAddFriend && (
          <FormAddFriend friends={friends} addFriend={handleAddFriend} />
        )}
        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? "Close" : "Add Friend"}
        </Button>
      </div>

      {/*Split Bill Form*/}
      {currentFriend && (
        <FormSplitBill
          friend={currentFriend}
          onSplit={handleUpdateFriendBalance}
        />
      )}
    </div>
  );
}

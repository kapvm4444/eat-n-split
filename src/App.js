import initialFriends from "./initialFriends";
import FriendList from "./components/FriendList";
import { useState, useEffect } from "react";
import Button from "./components/Button";
import FormAddFriend from "./components/FormAddFriend";
import FormSplitBill from "./components/FormSplitBill";
import TitleBar from "./components/TitleBar";

export default function App() {
  const [friends, setFriends] = useState(() => {
    const saved = localStorage.getItem("eat-n-split-friends");
    return saved ? JSON.parse(saved) : initialFriends;
  });

  useEffect(() => {
    localStorage.setItem("eat-n-split-friends", JSON.stringify(friends));
  }, [friends]);

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
    setShowAddFriend(false);
  }

  function handleUpdateFriendBalance(val) {
    setFriends((friends) =>
      friends.map((friend) =>
        currentFriend?.id === friend.id
          ? { ...friend, balance: friend.balance + val }
          : friend,
      ),
    );
    setCurrentFriend(null);
  }

  function handleDeleteFriend(id) {
    // Show confirmation prompt
    if(window.confirm("Are you sure you want to remove this friend?")) {
      setFriends((friends) => friends.filter((friend) => friend.id !== id));
      // Close the split bill form if the currently selected friend is deleted
      if (currentFriend?.id === id) setCurrentFriend(null);
    }
  }

  return (
    <>
      <TitleBar />
      <div className="app-container">
        <div className="sidebar">
          <FriendList
            friends={friends}
            onSelectFriend={handleCurrentFriend}
            onDeleteFriend={handleDeleteFriend}
            currentFriend={currentFriend}
          />

          {showAddFriend && (
            <FormAddFriend friends={friends} addFriend={handleAddFriend} />
          )}

          <Button className="btn-sidebar-add" onClick={handleShowAddFriend}>
            {showAddFriend ? "Close" : "Add Friend"}
          </Button>
        </div>

        <div className="main-content">
          {currentFriend && (
            <FormSplitBill
              key={currentFriend.id}
              friend={currentFriend}
              onSplit={handleUpdateFriendBalance}
            />
          )}
        </div>
      </div>
    </>
  );
}

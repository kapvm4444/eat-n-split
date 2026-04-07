import React from "react";
import Friend from "./Friend";

export default function FriendList({ friends, onSelectFriend, onDeleteFriend, currentFriend }) {
  if (friends.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '2rem', color: '#94a3b8' }}>
        <p>No friends added yet. Add someone to start splitting bills!</p>
      </div>
    );
  }

  return (
    <ul className="friend-list">
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          onSelectFriend={onSelectFriend}
          onDeleteFriend={onDeleteFriend}
          currentFriend={currentFriend}
        />
      ))}
    </ul>
  );
}

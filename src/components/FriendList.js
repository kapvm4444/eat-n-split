import React from "react";
import Friend from "./Friend";

export default function FriendList({ friends, onSelectFriend, currentFriend }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          onSelectFriend={onSelectFriend}
          currentFriend={currentFriend}
        />
      ))}
    </ul>
  );
}

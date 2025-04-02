import React from "react";
import Friend from "./Friend";

export default function FriendList({ friends, onSelectFriend }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          onSelectFriend={onSelectFriend}
        />
      ))}
    </ul>
  );
}

import React from "react";
import Button from "./Button";

export default function Friend({ friend, onSelectFriend }) {
  return (
    <li className={""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>

      {friend.balance > 0 && (
        <p className="green">
          {friend.name} needs to pay you ${friend.balance}
        </p>
      )}

      {friend.balance < 0 && (
        <p className="red">
          You need to pay {friend.name} ${Math.abs(friend.balance)}
        </p>
      )}

      {friend.balance === 0 && <p>You and {friend.name} are even</p>}

      <Button onClick={() => onSelectFriend(friend)}>Select</Button>
    </li>
  );
}

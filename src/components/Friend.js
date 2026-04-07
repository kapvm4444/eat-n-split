import React from "react";
import Button from "./Button";

export default function Friend({ friend, onSelectFriend, onDeleteFriend, currentFriend }) {
  const isSelected = currentFriend?.id === friend.id;

  return (
    <li className={`friend-item ${isSelected ? "selected" : ""}`}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>

      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you ${friend.balance}
        </p>
      )}

      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} ${Math.abs(friend.balance)}
        </p>
      )}

      {friend.balance === 0 && <p className="gray">You and {friend.name} are even</p>}

      <div 
        style={{ 
          gridRow: "span 2", 
          gridColumn: "3", 
          display: "flex", 
          gap: "1rem", 
          alignItems: "center" 
        }}
      >
        <Button onClick={() => onSelectFriend(friend)}>
          {isSelected ? "Close" : "Select"}
        </Button>
        <button 
          onClick={() => onDeleteFriend(friend.id)}
          style={{
            background: "none", 
            border: "none", 
            cursor: "pointer", 
            fontSize: "2.2rem", 
            padding: "0 0.4rem", 
            transition: "0.2s",
            opacity: 0.6
          }}
          onMouseOver={(e) => {
            e.target.style.opacity = 1;
            e.target.style.transform = "scale(1.1)";
          }}
          onMouseOut={(e) => {
            e.target.style.opacity = 0.6;
            e.target.style.transform = "scale(1)";
          }}
          title="Remove Friend"
        >
          🗑️
        </button>
      </div>
    </li>
  );
}

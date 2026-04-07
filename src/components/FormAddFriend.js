import React, { useState } from "react";
import Button from "./Button";

export default function FormAddFriend({ addFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/80");

  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !image) return;

    const id = crypto.randomUUID();
    const newFriend = {
      id,
      name,
      balance: 0,
      image: `${image}?u=${id}`,
    };

    addFriend(newFriend);
    setName("");
    setImage("https://i.pravatar.cc/80");
  }

  return (
    <form className="form form-add-friend" onSubmit={handleSubmit}>
      <h2>
        <span>🧑‍🤝‍🧑</span> Add a Friend
      </h2>

      <div className="form-row">
        <label>Friend Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g. John"
        />
      </div>

      <div className="form-row">
        <label>Image URL</label>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </div>

      <Button className="btn-submit" disabled={!name}>Add</Button>
    </form>
  );
}

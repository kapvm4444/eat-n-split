import React from "react";
import Button from "./Button";

export default function FormAddFriend() {
  return (
    <form className="form-add-friend">
      <h2>Add Friend</h2>

      <label>😃 Name</label>
      <input type="text" />

      <label>🌇 Image URL</label>
      <input type="text" />

      <Button>Add</Button>
    </form>
  );
}

import initialFriends from "./initialFriends";
import FriendList from "./components/FriendList";
import { useState } from "react";
import Button from "./components/Button";
import FormAddFriend from "./components/FormAddFriend";
import FormSplitBill from "./components/FormSplitBill";

export default function App() {
  const [friends, setFriends] = useState(initialFriends);

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList friends={friends} />
        <FormAddFriend />
        <Button>Add Friend</Button>
      </div>

      <FormSplitBill />
    </div>
  );
}

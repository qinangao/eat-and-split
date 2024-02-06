import FriendsList from "./components/FriendsList";
import FormAddFriend from "./components/FormAddFriend";
import Button from "./components/Button";
import FormSplitBill from "./components/FormSplitBill";
import { useState } from "react";
import initialFriends from "./components/data";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [friends, setFriends] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
    setIsOpen(false);
  }

  function handleSelect(friend) {
    setSelectedFriend(friend);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          onSelect={handleSelect}
          selectedFriend={selectedFriend}
        />

        {isOpen ? <FormAddFriend onAdd={handAddFriend} /> : " "}
        <Button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "Close" : "Add friends"}
        </Button>
      </div>
      {selectedFriend && <FormSplitBill selectedFriend={selectedFriend} />}
    </div>
  );
}

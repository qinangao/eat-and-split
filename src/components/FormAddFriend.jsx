import { useState } from "react";
import Button from "./Button";

export default function FormAddFriend({ onAdd }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48?u=118836");
  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !image) return;

    const id = crypto.randomUUID();
    const newFriend = {
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    };
    console.log(newFriend);
    onAdd(newFriend);

    setName("");
    setImage("https://i.pravatar.cc/48?u=118836");
  }
  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>👭Friend name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>🔅Image URL</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <Button>Add</Button>
    </form>
  );
}

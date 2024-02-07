import { useState } from "react";
import Button from "./Button";
export default function FormSplitBill({ selectedFriend }) {
  const [bill, setBill] = useState("");
  const [yourExpense, setYourExpense] = useState("");
  const friendExpense = bill - yourExpense;

  return (
    <form className="form-split-bill">
      <h2>Split a bill with {selectedFriend.name}</h2>
      <label>💰Bill Value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => Number(setBill(e.target.value))}
      />
      <label>👩Your expense</label>
      <input
        type="text"
        value={yourExpense}
        onChange={(e) => Number(setYourExpense(e.target.value))}
      />
      <label>🧒{selectedFriend.name}'s expense</label>
      <input type="text" disabled value={friendExpense} />
      <label>🤑Who is paying the bill</label>
      <select>
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>
      <Button>Split bill</Button>
    </form>
  );
}

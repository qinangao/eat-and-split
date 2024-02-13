import { useState } from "react";
import Button from "./Button";
export default function FormSplitBill({ selectedFriend, onSplitBill }) {
  const [bill, setBill] = useState("");
  const [yourExpense, setYourExpense] = useState("");
  const [payee, setPayee] = useState("user");
  const friendExpense = bill ? bill - yourExpense : "";

  function handleSubmit(e) {
    e.preventDefault();
    if (!bill || !yourExpense) return;
    onSplitBill(payee === "user" ? friendExpense : -yourExpense);
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {selectedFriend.name}</h2>
      <label>💰Bill Value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />
      <label>👩Your expense</label>
      <input
        type="text"
        value={yourExpense}
        onChange={(e) =>
          setYourExpense(
            Number(e.target.value) > bill ? yourExpense : Number(e.target.value)
          )
        }
      />
      <label>🧒{selectedFriend.name}'s expense</label>
      <input type="text" disabled value={friendExpense} />
      <label>🤑Who is paying the bill</label>
      <select value={payee} onChange={(e) => setPayee(e.target.value)}>
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>
      <Button>Split bill</Button>
    </form>
  );
}

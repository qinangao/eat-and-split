import Button from "./Button";
export default function FormSplitBill() {
  return (
    <form className="form-split-bill">
      <h2>Split a bill with xxx</h2>
      <label>💰Bill Value</label>
      <input type="text" />
      <label>👩Your expense</label>
      <input type="text" />
      <label>🧒xxx's expense</label>
      <input type="text" disabled />
      <label>🤑Who is paying the bill</label>
      <select>
        <option value="user">You</option>
        <option value="friend">xxx</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
}

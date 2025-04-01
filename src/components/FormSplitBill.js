import React, { useState } from "react";
import Button from "./Button";

export default function FormSplitBill() {
  const [billValue, setBillValue] = useState(0);
  const [yourExpense, setYourExpense] = useState(0);
  const [friendExpense, setFriendExpense] = useState(billValue - yourExpense);
  const [payingPerson, setPayingPerson] = useState("you");

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with X</h2>

      <label>💰Bill Value</label>
      <input
        type="number"
        value={billValue}
        onChange={(e) => setBillValue(e.target.value * 1)}
      />

      <label>👦Your Expense</label>
      <input
        type="number"
        value={yourExpense}
        onChange={(e) => setYourExpense(e.target.value * 1)}
      />

      <label>👬X's Expanse</label>
      <input type="number" disabled value={friendExpense} />

      <label>🤑Who is paying?</label>
      <select
        value={payingPerson}
        onChange={(e) => setPayingPerson(e.target.value)}
      >
        <option value="you">You</option>
        <option value="friend">X</option>
      </select>

      <Button>Split Bill</Button>
    </form>
  );
}

import React, { useState } from "react";
import Button from "./Button";

export default function FormSplitBill({ friend, onSplit }) {
  const [billValue, setBillValue] = useState(0);
  const [yourExpense, setYourExpense] = useState(0);
  const friendExpense = billValue - yourExpense;
  const [payingPerson, setPayingPerson] = useState("you");

  function handleSubmit(e) {
    e.preventDefault();

    if (!billValue || !yourExpense) return;

    const val = payingPerson === "you" ? friendExpense : -yourExpense;

    onSplit(val);
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {friend.name}</h2>

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

      <label>👬{friend.name}'s Expanse</label>
      <input type="number" value={friendExpense} disabled />

      <label>🤑Who is paying?</label>
      <select
        value={payingPerson}
        onChange={(e) => setPayingPerson(e.target.value)}
      >
        <option value="you">You</option>
        <option value="friend">{friend.name}</option>
      </select>

      <Button>Split Bill</Button>
    </form>
  );
}

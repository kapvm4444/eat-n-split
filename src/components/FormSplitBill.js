import React, { useState } from "react";
import Button from "./Button";

export default function FormSplitBill({ friend, onSplit }) {
  const [billValue, setBillValue] = useState("");
  const [yourExpense, setYourExpense] = useState("");
  const [payingPerson, setPayingPerson] = useState("you");
  const [errorShake, setErrorShake] = useState(false);

  const friendExpense = billValue ? billValue - yourExpense : "";
  const isInvalid = !billValue || !yourExpense || yourExpense > billValue || billValue <= 0;

  function handleSubmit(e) {
    e.preventDefault();

    if (isInvalid) {
      setErrorShake(true);
      setTimeout(() => setErrorShake(false), 500);
      return;
    }

    const val = payingPerson === "you" ? friendExpense : -yourExpense;
    onSplit(val);
  }

  return (
    <form className={`form form-split-bill ${errorShake ? 'shake' : ''}`} onSubmit={handleSubmit}>
      <h2>
        <span>🧾</span> Split a bill with {friend.name}
      </h2>

      <div className="form-row">
        <label><span>💰</span> Bill Value</label>
        <input
          type="number"
          value={billValue}
          min={1}
          onChange={(e) => setBillValue(Number(e.target.value))}
          placeholder="0"
        />
      </div>

      <div className="form-row">
        <label><span>👦</span> Your Expense</label>
        <input
          type="number"
          value={yourExpense}
          min={0}
          max={billValue ? billValue : undefined}
          onChange={(e) => setYourExpense(Number(e.target.value) > billValue ? billValue : Number(e.target.value))}
          placeholder="0"
        />
      </div>

      <div className="form-row">
        <label><span>🧑‍🤝‍🧑</span> {friend.name}'s Expense</label>
        <input 
          type="number" 
          value={friendExpense} 
          disabled 
        />
      </div>

      <div className="form-row">
        <label><span>🤑</span> Who is paying?</label>
        <select
          value={payingPerson}
          onChange={(e) => setPayingPerson(e.target.value)}
        >
          <option value="you">You</option>
          <option value="friend">{friend.name}</option>
        </select>
      </div>

      <Button className="btn-submit" disabled={isInvalid}>Split Bill</Button>
    </form>
  );
}

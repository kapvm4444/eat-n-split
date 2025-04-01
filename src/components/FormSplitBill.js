import React from "react";

export default function FormSplitBill() {
  return (
    <form className="form-split-bill">
      <h2>Split a bill with X</h2>

      <label>Bill Value</label>
      <input type="text" />

      <label>Your Expense</label>
      <input type="text" />

      <label>X's Expanse</label>
      <input type="text" disabled />

      <label>Who is paying?</label>
      <select>
        <option value="you">You</option>
        <option value="friend">X</option>
      </select>
    </form>
  );
}

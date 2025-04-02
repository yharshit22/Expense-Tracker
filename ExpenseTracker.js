import React, { useState } from "react";

function ExpenseTracker({ expenses, addExpense, deleteExpense }) {
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");

  const handleAddExpense = () => {
    if (category && amount) {
      addExpense({ category, amount: parseFloat(amount) });
      setCategory("");
      setAmount("");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", textAlign: "left" }}>
      <h2>Add Expense</h2>
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handleAddExpense}>Add Expense</button>

      <h2>Expenses</h2>
      <ul>
        {expenses.map((expense, index) => (
          <li key={index}>
            {expense.category}: ₹{expense.amount}{" "}
            <button onClick={() => deleteExpense(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExpenseTracker;
import React, { useState } from "react";
import ExpenseTracker from "./ExpenseTracker";

function App() {
  const [expenses, setExpenses] = useState([]);

  // Function to add expense
  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  // Function to delete expense
  const deleteExpense = (index) => {
    setExpenses(expenses.filter((_, i) => i !== index));
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Expense Tracker</h1>
      <ExpenseTracker expenses={expenses} addExpense={addExpense} deleteExpense={deleteExpense} />
    </div>
  );
}

export default App;
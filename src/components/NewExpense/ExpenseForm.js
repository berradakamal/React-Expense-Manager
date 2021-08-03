import "./ExpenseForm.css";
import React, { useState } from "react";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [addExpenseButton, clickedExpenseButton] = useState(false);

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      price: enteredAmount,
      date: enteredDate,
    };
    props.onSaveExpenseData(expenseData);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };
  const cancelAddExpense = () => {
    clickedExpenseButton(false);
  };
  const addExpense = () => {
    clickedExpenseButton(true);
  };
  if (addExpenseButton == true) {
    console.log("true");
    return (
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Bonjour {enteredTitle}</label>
            <input
              type="text"
              value={enteredTitle}
              onChange={titleChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="1"
              step="1"
              value={enteredAmount}
              onChange={amountChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              value={enteredDate}
              onChange={dateChangeHandler}
            />
          </div>
          <div className="new-expense__actions">
            <button type="submit" onClick={cancelAddExpense}>
              Cancel
            </button>
            <button type="submit">Add Expense</button>
          </div>
        </div>
      </form>
    );
  }
  return (
    <button type="submit" onClick={addExpense}>
      Add Expense
    </button>
  );
};
export default ExpenseForm;

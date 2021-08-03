import { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter/ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import { format } from "date-fns";

const Expenses = (props) => {
  const [pickedDate, selectedDate] = useState("2021");

  const onSavedYear = (selectedYear) => {
    selectedDate(selectedYear);
  };

  const selectedItems = props.items.filter((item) => {
    return format(new Date(item.date), "yyyy") === pickedDate;
  });

  console.log("Expenses");
  console.log(selectedItems);
  return (
    <Card className="expenses">
      <ExpensesFilter onSelected={onSavedYear} selected={pickedDate} />
      <ExpensesChart expenses={selectedItems} />
      <ExpensesList items={selectedItems} />
    </Card>
  );
};
export default Expenses;

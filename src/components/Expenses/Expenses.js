import { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter/ExpensesFilter";
import ExpensesList from "./ExpensesList";
import { format } from "date-fns";

const Expenses = (props) => {
  const [pickedDate, selectedDate] = useState("2021");

  const onSavedYear = (selectedYear) => {
    selectedDate(selectedYear);
  };

  const selectedItems = props.items.filter((item) => {
    return format(new Date(item.date), "yyyy") === pickedDate;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter onSelected={onSavedYear} selected={pickedDate} />
      <ExpensesList items={selectedItems} />
    </Card>
  );
};
export default Expenses;

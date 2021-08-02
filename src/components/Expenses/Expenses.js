import { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter/ExpensesFilter";
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
      {selectedItems.map((expense) => (
        <ExpenseItem
          title={expense.title}
          date={expense.date}
          price={expense.price}
        />
      ))}
    </Card>
  );
};
export default Expenses;

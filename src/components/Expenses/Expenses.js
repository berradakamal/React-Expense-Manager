import { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter/ExpensesFilter";

const Expenses = (props) => {
  const [pickedDate, selectedDate] = useState("2021");

  const onSavedYear = (selectedYear) => {
    selectedDate(selectedYear);
    console.log(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter onSelected={onSavedYear} selected={pickedDate} />
      <ExpenseItem
        title={props.items[0].title}
        price={props.items[0].price}
        date={props.items[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[1].title}
        price={props.items[1].price}
        date={props.items[1].date}
      ></ExpenseItem>
    </Card>
  );
};
export default Expenses;

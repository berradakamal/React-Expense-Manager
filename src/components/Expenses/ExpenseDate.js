import { format, fromUnixTime } from "date-fns";
import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  const month = format(new Date(props.date), "MMMM");
  const day = format(new Date(props.date), "dd");
  const year = format(new Date(props.date), "yyyy");
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
};

export default ExpenseDate;

import { format } from "date-fns";
import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  const month = format(props.date, "MMMM");
  const day = format(props.date, "dd");
  const year = format(props.date, "yy");
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
};

export default ExpenseDate;

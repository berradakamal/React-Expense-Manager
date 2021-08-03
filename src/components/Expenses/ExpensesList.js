import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";
const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Pas de dépense trouvée</h2>;
  }
  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          title={expense.title}
          date={expense.date}
          price={expense.price}
          key={expense.title}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;

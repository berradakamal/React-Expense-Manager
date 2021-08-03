import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
function App() {
  let DUMMY_CONTENT = [
    {
      title: "Test de son",
      price: 32,
      date: new Date(2021, 12, 5),
      key: Math.random().toString(),
    },
    {
      title: "Test de machine",
      price: 90,
      date: new Date(2021, 12, 5),
      key: Math.random().toString(),
    },
  ];
  const [allExpenses, addNewExpense] = useState(DUMMY_CONTENT);

  const expenseData = (expense) => {
    console.log(expense);
    addNewExpense((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  console.log(allExpenses);
  return (
    <div>
      <NewExpense onAddExpense={expenseData} />
      <Expenses items={allExpenses} />
    </div>
  );
}

export default App;

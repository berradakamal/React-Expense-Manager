import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
function App() {
  let mich = [
    {
      title: "Test de son",
      price: 32,
      date: new Date(2021, 12, 23),
    },
    {
      title: "Test de machine",
      price: 90,
      date: new Date(2021, 11, 23),
    },
  ];
  const expenseData = (expense) => {
    console.log("APP.JS");
    console.log(expense);
  };
  return (
    <div>
      <NewExpense onAddExpense={expenseData} />
      <Expenses items={mich} />
    </div>
  );
}

export default App;

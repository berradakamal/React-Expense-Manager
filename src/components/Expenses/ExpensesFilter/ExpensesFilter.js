import { useState } from "react";
import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const onSelectedDate = (event) => {
    props.onSelected(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filtrer par année</label>
        <select onChange={onSelectedDate} value={props.selected}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;

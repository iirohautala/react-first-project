import Expenses from "./components/Expenses/Expenses";
import React, { useState } from 'react';

import NewExpense from "./components/Expenses/NewExpense/NewExpense";

const dummy_expenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date("2022-07-14"),
  },
  {id: 'e2', title: 'New TV', amount: 799.49, date: new Date("2022-08-12")},
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 300.00,
    date: new Date("2023-01-01"),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date("2023-01-09"),
  },
];

const App = () => {

  const [expenses, SetExpenses] = useState(dummy_expenses);

  const addExpenseHandler = expense => {
    SetExpenses((preExpenses)=> {
      return [expense, ...preExpenses];
    });
    //console.log('In App.js');
    //console.log(expense);
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses}/>
      <p>Iiro Hautala / VAMK / BIT</p>
    </div>
  );
}

export default App;

import React from 'react';
// In Modern react setup we need not import React but use jsx
import './Components/Expenses/ExpenseItem.css';
import Expenses from './Components/Expenses/Expenses.js';
import './Components/UI/Card.css';
const App = () => {
  const expenses = [
    {
      id: 'id1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 8, 14),
    },
    {
      id: 'id2',
      title: 'Toys',
      amount: 8,
      date: new Date(2020, 4, 1),
    },
    {
      id: 'id3',
      title: 'Chappals',
      amount: 32.92,
      date: new Date(2021, 9, 4),
    },
    {
      id: 'id4',
      title: 'Accessories',
      amount: 214.48,
      date: new Date(2020, 3, 24),
    },
  ];
  // return (
  // <div>
  // <Expenses items={expenses}></Expenses>
  // </div>
  // );
//Alternative aproach of returning element  as JSX . Here , Infact behind the scenes JSX converts to these :-----
  return React.createElement(
    'div',
    {},
    React.createElement('h2', {}, "Let's get started"),
    React.createElement(Expenses, {items: expenses}),
  );
};
export default App;

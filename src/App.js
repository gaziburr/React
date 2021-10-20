import ExpenseItem from './Components/ExpenseItem.js';

function App() {
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
  return (
    <div>
      <h2>Lets get Started !</h2>
      <div>
        <ExpenseItem
          title={expenses[0].title}
          amount={expenses[0].amount}
          date={expenses[0].date}></ExpenseItem>
        <ExpenseItem

          title={expenses[1].title}
          amount={expenses[1].amount}
          date={expenses[1].date}></ExpenseItem>
        <ExpenseItem
          title={expenses[2].title}
          amount={expenses[2].amount}
          date={expenses[2].date}></ExpenseItem>
        <ExpenseItem
          title={expenses[3].title}
          amount={expenses[3].amount}
          date={expenses[3].date}></ExpenseItem>
      </div>
    </div>
  );
}
export default App;

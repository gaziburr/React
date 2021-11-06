import './Components/ExpenseItem.css';
import Expenses from './Components/Expenses.js';
import './Components/Card.css';
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
  return (
    <div>
      <Expenses items={expenses}></Expenses>
    </div>
  );
};
// If There is no content between the opening and closing tag of custom Components we can We can use Self Closing tag Instead
export default App;

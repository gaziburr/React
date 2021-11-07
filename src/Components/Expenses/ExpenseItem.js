import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate.js';
import Card from '../UI/Card.js';
const ExpenseItem = props => {
  const month = props.date.toLocaleString('eng-US', {month: 'long'});
  const day = props.date.toLocaleString('eng-US', {month: '2-digit'});
  const year = props.date.getFullYear();
  return (
    <Card className="expense-item">
      <ExpenseDate year={year} day={day} month={month} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
};
export default ExpenseItem;

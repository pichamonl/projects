import ExpenseItem from './components/ExpenseItem';

function App() {
  const expenses = [
    { id: 'e1', title: 'Lunch', amount: 1200, date: new Date(2023, 0, 22) },
    { id: 'e2', title: 'Cake', amount: 2200, date: new Date(2023, 1, 24) },
    { id: 'e3', title: 'Toothpaste', amount: 2200, date: new Date(2023, 1, 26) },
    { id: 'e4', title: 'Soap', amount: 110, date: new Date(2023, 1, 3) },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      {expenses.map(expense => (
        <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date}></ExpenseItem>
      ))}
    </div>
  );
}

export default App;

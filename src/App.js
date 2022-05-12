import ExpenseItem from './components/ExpenseItem/ExpenseItem';


function App() {
  const expenses = [{
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2022, 7, 14)
    },
    {
      id: 'e2',
      title: 'New TV',
      amount: 799.49,
      date: new Date(2022, 2, 12)
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2022, 2, 28 )
    },
    {
      id: 'e4',
      title: 'New Wood Desk',
      amount: 450,
      date: new Date(2022, 5, 12)
    },
  ]

  return ( 
  <div>
    <h2 > Lets get started </h2> 
    <ExpenseItem />
    <ExpenseItem />
    <ExpenseItem />
    </div>
  );
}

export default App;
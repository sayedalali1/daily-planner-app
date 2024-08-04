// src/App.jsx
import './App.css';

const App = () => {
  const plans = [
    { task: 'Wash car', completed: true },
    { task: 'Go shopping', completed: false },
    { task: 'Iron clothes', completed: true },
  ];

  return (
    <>
      <h1>Task List</h1>
      <ul>
        {plans.map((plan, index) => (
          <li key={index} className={plan.completed ? 'completed' : 'not-completed'}>
            {plan.task}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
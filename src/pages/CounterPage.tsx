import { useAppContext } from '../context/AppContext';

function CounterPage() {
  const { count, increment, decrement } = useAppContext();

  return (
    <div>
      <h1>Counter</h1>
      <p>Valor {count}</p>
      <button onClick={decrement}> Restar</button>
      <button onClick={increment} > Sumr</button>
    </div>
  );
}

export default CounterPage;


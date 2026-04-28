import { useState } from 'react';
import { useAppContext } from '../context/AppContext';

function MessagesPage() {
  const { message, setMessage, resetMessage } = useAppContext();
  const [input, setInput] = useState('');

  return (
    <div>
      <h1>Messages</h1>
      <p>Mensaje actual: {message}</p>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Escribi algo"
      />
      <button onClick={() => setMessage(input)} >
        Guardalo
      </button>
      <button onClick={resetMessage} >
        pa elminar
      </button>
    </div>
  );
}

export default MessagesPage;

console.log ("Faltan ")
//me faolta poner pa que cuando agrege el mensajeeee 
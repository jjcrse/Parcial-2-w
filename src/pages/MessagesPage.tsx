import { useState } from 'react';
import { useAppContext } from '../context/AppContext';

function MessagesPage() {
  const { message, setMessage, resetMessage } = useAppContext();
  const [input, setInput] = useState('');

  return (
    <div style={{ padding: '1rem' }}>
      <h1>Messages</h1>
      <p>Mensaje actual: {message}</p>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Escribi algo"
      />
      <button onClick={() => setMessage(input)} >
        Guardar
      </button>
      <button onClick={resetMessage} >
        Reset
      </button>
    </div>
  );
}

export default MessagesPage;
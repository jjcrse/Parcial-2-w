import { useAppContext } from '../context/AppContext';

function HomePage() {
  const { message } = useAppContext();

  return (
    <div>
      <h1>Home</h1>
      <p>Mensaje: <strong>{message}</strong></p>
      <div>
        <reunionid></reunionid>
      </div>
    </div>
  );
}

export default HomePage;
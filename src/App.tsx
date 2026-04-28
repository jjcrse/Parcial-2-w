import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import HomePage from './pages/HomePages';
import CounterPage from './pages/CounterPage';
import MessagesPage from './pages/Messagespage';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/counter" element={<CounterPage />} />
        <Route path="/messages" element={<MessagesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
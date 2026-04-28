import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/counter">Counter</Link>
      <Link to="/messages">Messages</Link>
    </nav>
  );
}

export default Navbar;
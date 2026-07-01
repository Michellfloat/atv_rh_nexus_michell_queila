import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">ERP Nexus</div>
      <ul className="navbar-menu">
        <li><Link to="/" className="navbar-link">Home</Link></li>
        <li><Link to="/clientes" className="navbar-link">Clientes</Link></li>
        <li><Link to="/funcionarios" className="navbar-link">Funcionários</Link></li>
      </ul>
    </nav>
  );
}
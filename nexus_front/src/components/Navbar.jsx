import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px 20px',
      backgroundColor: '#1e293b',
      color: '#fff',
      fontFamily: 'sans-serif'
    }}>
      <div style={{ fontWeight: 'bold', fontSize: '20px' }}>ERP Nexus</div>
      <ul style={{ display: 'flex', listStyle: 'none', gap: '20px', margin: 0, padding: 0 }}>
        <li><Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link></li>
        <li><Link to="/clientes" style={{ color: '#fff', textDecoration: 'none' }}>Clientes</Link></li>
        <li><Link to="/funcionarios" style={{ color: '#fff', textDecoration: 'none' }}>Funcionários</Link></li>
      </ul>
    </nav>
  );
}
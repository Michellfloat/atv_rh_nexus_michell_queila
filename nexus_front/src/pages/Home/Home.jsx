import './Home.css';

export default function Home() {
  return (
    <div className="home-container">
      <h1>Bem-vindo ao ERP Nexus</h1>
      <p>Sistema de Gestão Interna de Clientes e Funcionários.</p>
      <hr className="home-divider" />
      <div className="home-cards">
        <div className="home-card">
          <h3>Clientes</h3>
          <p>Gerencie os parceiros de negócios.</p>
        </div>
        <div className="home-card">
          <h3>Funcionários</h3>
          <p>Controle a equipe e setores internos.</p>
        </div>
      </div>
    </div>
  );
}
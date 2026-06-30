
export default function Home() {
  return (
    <div style={{ padding: '20px', textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h1>Bem-vindo ao ERP Nexus</h1>
      <p>Sistema de Gestão Interna de Clientes e Funcionários.</p>
      <hr style={{ margin: '20px 0', borderColor: '#eee' }} />
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '20px' }}>
        <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px', width: '200px' }}>
          <h3>Clientes</h3>
          <p>Gerencie os parceiros de negócios.</p>
        </div>
        <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px', width: '200px' }}>
          <h3>Funcionários</h3>
          <p>Controle a equipe e setores internos.</p>
        </div>
      </div>
    </div>
  );
}
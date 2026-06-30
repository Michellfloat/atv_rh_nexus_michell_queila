import { useState, useEffect } from 'react';
import api from '../../service/api';

export default function Funcionarios() {
  const [funcionarios, setFuncionarios] = useState([]);
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    email: '',
    cargo: '',
    setor: ''
  });

  // Buscar funcionários no Back-end
  const buscarFuncionarios = async () => {
    try {
      const response = await api.get('/funcionarios');
      setFuncionarios(response.data);
    } catch (error) {
      console.error("Erro ao buscar funcionários:", error);
      alert("Não foi possível carregar a lista de funcionários.");
    }
  };

  useEffect(() => {
  let ativo = true;

  const carregarDados = async () => {
    try {
      const response = await api.get('/funcionarios');
      if (ativo) {
        setFuncionarios(response.data);
      }
    } catch (error) {
      console.error("Erro ao buscar funcionários:", error);
    }
  };

  carregarDados();

  // Função de limpeza (cleanup) para evitar renderizações em cascata se o componente desmontar
  return () => {
    ativo = false;
  };
}, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Enviar novo funcionário para a API
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/funcionarios', formData);
      alert('Funcionário cadastrado com sucesso!');
      setFormData({ nome: '', telefone: '', email: '', cargo: '', setor: '' });
      buscarFuncionarios();
    } catch (error) {
      console.error("Erro ao cadastrar funcionário:", error);
      alert("Erro ao cadastrar funcionário. Verifique os dados.");
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>Gestão de Funcionários</h2>
      
      {/* Formulário */}
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '400px', marginBottom: '30px' }}>
        <input type="text" name="nome" placeholder="Nome Completo" value={formData.nome} onChange={handleChange} required style={{ padding: '8px' }} />
        <input type="text" name="telefone" placeholder="Telefone" value={formData.telefone} onChange={handleChange} required style={{ padding: '8px' }} />
        <input type="email" name="email" placeholder="E-mail" value={formData.email} onChange={handleChange} required style={{ padding: '8px' }} />
        <input type="text" name="cargo" placeholder="Cargo (Ex: Desenvolvedor)" value={formData.cargo} onChange={handleChange} required style={{ padding: '8px' }} />
        <input type="text" name="setor" placeholder="Setor (Ex: Tecnologia)" value={formData.setor} onChange={handleChange} required style={{ padding: '8px' }} />
        <button type="submit" style={{ padding: '10px', backgroundColor: '#16a34a', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Cadastrar Funcionário
        </button>
      </form>

      <hr />

      {/* Listagem */}
      <h3>Funcionários Cadastrados</h3>
      <table border="1" cellPadding="10" style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', marginTop: '10px' }}>
        <thead style={{ backgroundColor: '#f1f5f9' }}>
          <tr>
            <th>Nome</th>
            <th>Telefone</th>
            <th>E-mail</th>
            <th>Cargo</th>
            <th>Setor</th>
          </tr>
        </thead>
        <tbody>
          {funcionarios.length === 0 ? (
            <tr>
              <td colSpan="5" style={{ textAlign: 'center' }}>Nenhum funcionário encontrado ou aguardando conexão com a API.</td>
            </tr>
          ) : (
            funcionarios.map((func, index) => (
              <tr key={index}>
                <td>{func.nome}</td>
                <td>{func.telefone}</td>
                <td>{func.email}</td>
                <td>{func.cargo}</td>
                <td>{func.setor}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
import { useState, useEffect } from 'react';
import api from '../../service/api';

export default function Clientes() {
  // Estados para armazenar a lista de clientes e os dados do formulário
  const [clientes, setClientes] = useState([]);
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    cpf: ''
  });

  // Função para buscar os clientes no Back-end (Spring Boot)
  const buscarClientes = async () => {
    try {
      const response = await api.get('/clientes');
      setClientes(response.data);
    } catch (error) {
      console.error("Erro ao buscar clientes:", error);
      alert("Não foi possível carregar a lista de clientes. Verifique se o Back-end está rodando.");
    }
  };

  // Executa a busca assim que a tela abre
  useEffect(() => {
  let ativo = true;

  const carregarDados = async () => {
    try {
      const response = await api.get('/clientes');
      if (ativo) {
        setClientes(response.data);
      }
    } catch (error) {
      console.error("Erro ao buscar clientes:", error);
    }
  };

  carregarDados();

  // Função de limpeza (cleanup) para evitar renderizações em cascata se o componente desmontar
  return () => {
    ativo = false;
  };
}, []);

  // Atualiza os dados do formulário conforme o usuário digita
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Envia os dados para o Back-end ao clicar no botão
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/clientes', formData);
      alert('Cliente cadastrado com sucesso!');
      // Limpa o formulário
      setFormData({ nome: '', email: '', telefone: '', cpf: '' });
      // Atualiza a tabela com o novo cliente
      buscarClientes();
    } catch (error) {
      console.error("Erro ao cadastrar cliente:", error);
      alert("Erro ao cadastrar cliente. Verifique os dados.");
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>Gestão de Clientes</h2>
      
      {/* Formulário de Cadastro */}
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '400px', marginBottom: '30px' }}>
        <input type="text" name="nome" placeholder="Nome Completo" value={formData.nome} onChange={handleChange} required style={{ padding: '8px' }} />
        <input type="email" name="email" placeholder="E-mail" value={formData.email} onChange={handleChange} required style={{ padding: '8px' }} />
        <input type="text" name="telefone" placeholder="Telefone" value={formData.telefone} onChange={handleChange} required style={{ padding: '8px' }} />
        <input type="text" name="cpf" placeholder="CPF" value={formData.cpf} onChange={handleChange} required style={{ padding: '8px' }} />
        <button type="submit" style={{ padding: '10px', backgroundColor: '#0284c7', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Cadastrar Cliente
        </button>
      </form>

      <hr />

      {/* Tabela de Listagem */}
      <h3>Clientes Cadastrados</h3>
      <table border="1" cellPadding="10" style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', marginTop: '10px' }}>
        <thead style={{ backgroundColor: '#f1f5f9' }}>
          <tr>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Telefone</th>
            <th>CPF</th>
          </tr>
        </thead>
        <tbody>
          {clientes.length === 0 ? (
            <tr>
              <td colSpan="4" style={{ textAlign: 'center' }}>Nenhum cliente encontrado ou aguardando conexão com a API.</td>
            </tr>
          ) : (
            clientes.map((cliente, index) => (
              <tr key={index}>
                <td>{cliente.nome}</td>
                <td>{cliente.email}</td>
                <td>{cliente.telefone}</td>
                <td>{cliente.cpf}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
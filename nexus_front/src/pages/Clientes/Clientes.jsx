import { useState, useEffect } from 'react';
import api from '../../service/api.js';
import { toast } from 'react-toastify';
import './Clientes.css';

export default function Clientes() {
  const [clientes, setClientes] = useState([]);
  const [formData, setFormData] = useState({ nome: '', email: '', telefone: '', cpf: '' });

  useEffect(() => {
    let ativo = true;

    const buscarClientes = async () => {
      try {
        const response = await api.get('/clientes');
        if (ativo) setClientes(response.data);
      } catch (error) {
        console.error("Erro ao buscar clientes:", error);
      }
    };

    buscarClientes();
    return () => { ativo = false; };
  }, []);

  const buscarClientesAtualizado = async () => {
    try {
      const response = await api.get('/clientes');
      setClientes(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/clientes', formData);
      toast.success('Cliente cadastrado com sucesso! 🎉');
      setFormData({ nome: '', email: '', telefone: '', cpf: '' });
      buscarClientesAtualizado();
    } catch (error) {
      console.error("Erro ao atualizar lista de clientes:", error);
      toast.error('Erro ao cadastrar cliente. Verifique os dados.');
    }
  };

  return (
    <div className="page-container">
      <h2>Gestão de Clientes</h2>
      
      <form onSubmit={handleSubmit} className="form-group">
        <input type="text" name="nome" placeholder="Nome Completo" value={formData.nome} onChange={handleChange} required className="form-input" />
        <input type="email" name="email" placeholder="E-mail" value={formData.email} onChange={handleChange} required className="form-input" />
        <input type="text" name="telefone" placeholder="Telefone" value={formData.telefone} onChange={handleChange} required className="form-input" />
        <input type="text" name="cpf" placeholder="CPF" value={formData.cpf} onChange={handleChange} required className="form-input" />
        <button type="submit" className="btn-submit-cliente">Cadastrar Cliente</button>
      </form>

      <hr />

      <h3>Clientes Cadastrados</h3>
      <table className="data-table">
        <thead className="table-header">
          <tr>
            <th>Nome</th><th>E-mail</th><th>Telefone</th><th>CPF</th>
          </tr>
        </thead>
        <tbody>
          {clientes.length === 0 ? (
            <tr><td colSpan="4" className="no-data">Nenhum cliente cadastrado.</td></tr>
          ) : (
            clientes.map((cliente, index) => (
              <tr key={index}>
                <td>{cliente.nome}</td><td>{cliente.email}</td><td>{cliente.telefone}</td><td>{cliente.cpf}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
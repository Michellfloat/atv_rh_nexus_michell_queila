import { useState, useEffect } from 'react';
import api from '../../service/api.js';
import { toast } from 'react-toastify';
import './Funcionarios.css';

export default function Funcionarios() {
  const [funcionarios, setFuncionarios] = useState([]);
  const [formData, setFormData] = useState({ nome: '', telefone: '', email: '', cargo: '', setor: '' });

  useEffect(() => {
    let ativo = true;

    const buscarFuncionarios = async () => {
      try {
        const response = await api.get('/funcionarios');
        if (ativo) setFuncionarios(response.data);
      } catch (error) {
        console.error("Erro ao buscar funcionários:", error);
      }
    };

    buscarFuncionarios();
    return () => { ativo = false; };
  }, []);

  const buscarFuncionariosAtualizado = async () => {
    try {
      const response = await api.get('/funcionarios');
      setFuncionarios(response.data);
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
      await api.post('/funcionarios', formData);
      toast.success('Funcionário cadastrado com sucesso! 🎉');
      setFormData({ nome: '', telefone: '', email: '', cargo: '', setor: '' });
      buscarFuncionariosAtualizado();
    } catch (error) {
      console.error("Erro ao atualizar lista de funcionários:", error);
      toast.error('Erro ao cadastrar funcionário.');
    }
  };

  return (
    <div className="page-container">
      <h2>Gestão de Funcionários</h2>
      
      <form onSubmit={handleSubmit} className="form-group">
        <input type="text" name="nome" placeholder="Nome Completo" value={formData.nome} onChange={handleChange} required className="form-input" />
        <input type="text" name="telefone" placeholder="Telefone" value={formData.telefone} onChange={handleChange} required className="form-input" />
        <input type="email" name="email" placeholder="E-mail" value={formData.email} onChange={handleChange} required className="form-input" />
        <input type="text" name="cargo" placeholder="Cargo" value={formData.cargo} onChange={handleChange} required className="form-input" />
        <input type="text" name="setor" placeholder="Setor" value={formData.setor} onChange={handleChange} required className="form-input" />
        <button type="submit" className="btn-submit-func">Cadastrar Funcionário</button>
      </form>

      <hr />

      <h3>Funcionários Cadastrados</h3>
      <table className="data-table">
        <thead className="table-header">
          <tr>
            <th>Nome</th><th>Telefone</th><th>E-mail</th><th>Cargo</th><th>Setor</th>
          </tr>
        </thead>
        <tbody>
          {funcionarios.length === 0 ? (
            <tr><td colSpan="5" className="no-data">Nenhum funcionário cadastrado.</td></tr>
          ) : (
            funcionarios.map((func, index) => (
              <tr key={index}>
                <td>{func.nome}</td><td>{func.telefone}</td><td>{func.email}</td><td>{func.cargo}</td><td>{func.setor}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
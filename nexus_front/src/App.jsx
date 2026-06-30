import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Clientes from './pages/Clientes/Clientes'
import Funcionarios from './pages/Funcionarios/Funcionarios'
import Home from './pages/Home/Home'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  

  return (
    <>
      {/* A Navbar fica fora de <Routes> para aparecer fixada em todas as telas */}
      <Navbar />

      {/* Aqui o React Router decide qual página renderizar baseado na URL */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/funcionarios" element={<Funcionarios />} />
      </Routes>

      {/* Container das notificações elegantes do Toastify */}
      <ToastContainer position="top-right" autoClose={3000} />
    
    </>
  )
}

export default App;

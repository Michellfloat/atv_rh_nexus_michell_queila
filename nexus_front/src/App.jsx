import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Header/Navbar'
import Clientes from './pages/Clientes/Clientes'
import Funcionarios from './pages/Funcionarios/Funcionarios'
import Home from './pages/Home/Home'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      {/* A Navbar fica fora de <Routes> para aparecer fixada em todas as telas */}
     
      
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/funcionarios" element={<Funcionarios />} />
      </Routes>
      
      {/* ADICIONE O FOOTER AQUI */}
      <Footer />

      <ToastContainer position="top-right" autoClose={3000} />
    
  </>
);
}

export default App;
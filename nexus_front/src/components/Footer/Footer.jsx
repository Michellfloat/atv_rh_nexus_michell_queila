import './Footer.css';

export default function Footer() {
  const anoAtual = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>&copy; {anoAtual} ERP Nexus. Todos os direitos reservados.</p>
      <p className="footer-credits">
        Desenvolvido por: <span className="author-name">Michell Silva</span> & <span className="author-name">Queila Leal</span>
      </p>
    </footer>
  );
}
import { Link } from 'react-router-dom';
import logo from '../assets/logo-transparent.png';
import { APP_URL } from '../config';

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="site-footer-brand">
          <img src={logo} alt="CT Thiago Martiniano" />
          <div>
            <strong>CT Thiago Martiniano</strong>
            <p className="muted">Escola de Jiu-Jitsu — Stiep, Salvador/BA</p>
          </div>
        </div>

        <div className="site-footer-links">
          <div>
            <div className="site-footer-title">Navegação</div>
            <Link to="/">Início</Link>
            <Link to="/kids">Kids</Link>
            <Link to="/app">App do Aluno</Link>
            <Link to="/contato">Contato</Link>
          </div>
          <div>
            <div className="site-footer-title">Contato</div>
            <a href="https://wa.me/5571993333330" target="_blank" rel="noreferrer">(71) 99333-3330</a>
            <a href="https://www.instagram.com/ctmartiniano/" target="_blank" rel="noreferrer">@ctmartiniano</a>
            <a href="https://maps.app.goo.gl/R25AoAxjwmgiK3Ah8" target="_blank" rel="noreferrer">Stiep, Salvador — BA</a>
          </div>
          <div>
            <div className="site-footer-title">Conta</div>
            <a href={`${APP_URL}/entrar`}>Entrar / Área do aluno</a>
            <a href={`${APP_URL}/cadastro`}>Cadastre-se</a>
            <a href={`${APP_URL}/privacidade`}>Política de Privacidade</a>
          </div>
        </div>
      </div>
      <p className="site-footer-copy">© {new Date().getFullYear()} CT Thiago Martiniano. Todos os direitos reservados.</p>
    </footer>
  );
}

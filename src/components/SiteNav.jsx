import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../assets/logo-transparent.png';
import { APP_URL } from '../config';

const LINKS = [
  { to: '/', label: 'Início', end: true },
  { to: '/kids', label: 'Kids' },
  { to: '/app', label: 'App do Aluno' },
  { to: '/contato', label: 'Contato' },
  { to: '/defesa-pessoal', label: 'Defesa Pessoal' },
];

export default function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-nav">
      <div className="site-nav-inner">
        <Link to="/" className="site-nav-brand" onClick={() => setOpen(false)}>
          <img src={logo} alt="CT Thiago Martiniano" />
          <div>
            <strong>CT Thiago Martiniano</strong>
            <span>Escola de Jiu-Jitsu</span>
          </div>
        </Link>

        <nav className={`site-nav-links ${open ? 'open' : ''}`}>
          {LINKS.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.end} onClick={() => setOpen(false)}>
              {l.label}
            </NavLink>
          ))}
          <a href={`${APP_URL}/entrar`} className="btn btn-ghost btn-sm" onClick={() => setOpen(false)}>Área do Aluno</a>
        </nav>

        <div className="flex items-center gap-8">
          <button className="site-nav-toggle" aria-label="Abrir menu" onClick={() => setOpen((v) => !v)}>
            {open ? '✕' : '☰'}
          </button>
        </div>
      </div>
    </header>
  );
}

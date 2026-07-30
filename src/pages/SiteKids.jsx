import homeHeroKids from '../assets/home-hero-kids.jpg';
import { APP_URL } from '../config';

const WHATSAPP = 'https://wa.me/5571993333330?text=' + encodeURIComponent('Oi! Quero saber mais sobre o Jiu-Jitsu Kids no CT.');

const BENEFICIOS = [
  { icon: '🎈', titulo: 'Diversão de verdade', texto: 'Aula lúdica, com brincadeiras e jogos — a criança aprende jiu-jitsu sem nem perceber que está "treinando".', cor: 'var(--kt-coral)' },
  { icon: '🤝', titulo: 'Respeito e disciplina', texto: 'Valores que vão pra vida toda, ensinados de um jeito leve e positivo.', cor: 'var(--kt-teal)' },
  { icon: '💪', titulo: 'Corpo em movimento', texto: 'Coordenação, força e atividade física longe das telas.', cor: 'var(--kt-yellow)' },
  { icon: '🌟', titulo: 'Autoconfiança', texto: 'Cada faixa conquistada é uma vitória — e a criança sente isso de verdade.', cor: 'var(--kt-purple)' },
];

export default function SiteKids() {
  return (
    <div className="site-kids">
      <section className="site-home-hero site-kids-hero">
        <img src={homeHeroKids} alt="Jiu-Jitsu Kids — CT Thiago Martiniano" />
        <div className="site-home-hero-cta">
          <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn btn-primary">Falar no WhatsApp</a>
          <a href={`${APP_URL}/cadastro`} className="btn btn-ghost" style={{ borderColor: 'rgba(255,255,255,0.35)', color: '#fff' }}>Quero matricular</a>
        </div>
      </section>

      <section className="site-section">
        <div className="site-section-head">
          <div className="site-section-eyebrow">Por que o jiu-jitsu kids</div>
          <h2>Muito mais do que uma luta</h2>
        </div>
        <div className="site-grid">
          {BENEFICIOS.map((b) => (
            <div key={b.titulo} className="site-card" style={{ '--card-accent': b.cor }}>
              <span className="icon">{b.icon}</span>
              <h3>{b.titulo}</h3>
              <p>{b.texto}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="site-band">
        <div className="site-section text-center">
          <div className="site-section-eyebrow">Horário</div>
          <h2 style={{ marginBottom: 8 }}>Turma Infantil</h2>
          <p className="muted" style={{ fontSize: 17, fontWeight: 600 }}>Segunda, quarta e quinta às 18:00h</p>
        </div>
      </section>

      <section className="site-cta-band">
        <h2>Vem conhecer a turminha!</h2>
        <p>Marca uma aula experimental e vê seu filho(a) se apaixonar pelo jiu-jitsu.</p>
        <div className="site-hero-cta">
          <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn btn-primary">Falar no WhatsApp</a>
          <a href={`${APP_URL}/cadastro`} className="btn btn-ghost">Quero matricular meu filho(a)</a>
        </div>
      </section>
    </div>
  );
}

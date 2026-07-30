import MapEmbed from '../components/MapEmbed';
import SiteScheduleGrid from '../components/SiteScheduleGrid';

const WHATSAPP = 'https://wa.me/5571993333330?text=' + encodeURIComponent('Oi! Quero saber mais sobre o CT Thiago Martiniano.');

export default function SiteContato() {
  return (
    <div>
      <section className="site-hero" style={{ paddingBottom: 60 }}>
        <span className="site-hero-eyebrow">Contato</span>
        <h1>Fala com a gente</h1>
        <p className="lead">Stiep, Salvador — BA. Tira suas dúvidas, agenda uma visita ou marca sua aula experimental.</p>
        <div className="site-contact-actions">
          <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn btn-primary">WhatsApp</a>
          <a href="https://www.instagram.com/ctmartiniano/" target="_blank" rel="noreferrer" className="btn btn-ghost">Instagram</a>
          <a href="https://maps.app.goo.gl/R25AoAxjwmgiK3Ah8" target="_blank" rel="noreferrer" className="btn btn-ghost">Como chegar</a>
        </div>
      </section>

      <section className="site-section" style={{ paddingTop: 0 }}>
        <div className="grid grid-2" style={{ gap: 22 }}>
          <MapEmbed />
          <div className="card">
            <div className="card-title">Endereço</div>
            <p style={{ fontSize: 15, lineHeight: 1.7 }}>Stiep, Salvador — Bahia</p>
            <div className="card-title mt-24">Telefone / WhatsApp</div>
            <p style={{ fontSize: 15 }}>(71) 99333-3330</p>
            <div className="card-title mt-24">Instagram</div>
            <p style={{ fontSize: 15 }}>@ctmartiniano</p>
          </div>
        </div>
      </section>

      <section className="site-band">
        <div className="site-section">
          <div className="site-section-head">
            <div className="site-section-eyebrow">Horários de funcionamento</div>
            <h2>Grade de turmas da semana</h2>
          </div>
          <SiteScheduleGrid />
        </div>
      </section>
    </div>
  );
}

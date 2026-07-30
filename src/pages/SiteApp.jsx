import { APP_URL } from '../config';

const FEATURES = [
  { icon: '📅', titulo: 'Frequência', texto: 'Marque sua presença em cada treino e acompanhe sua sequência de dias.' },
  { icon: '🥋', titulo: 'Faixas e graduações', texto: 'Veja sua faixa, grau, e todo o histórico de graduações registrado pelo professor.' },
  { icon: '💰', titulo: 'Financeiro', texto: 'Situação de pagamento sempre à mão, sem precisar perguntar.' },
  { icon: '🏆', titulo: 'Painel do Competidor', texto: 'Peso, categoria, campeonatos, metas e histórico de medalhas num só lugar.' },
  { icon: '🥊', titulo: 'Aula Particular', texto: 'Peça uma aula individual com o professor direto pelo app, sem precisar ligar.' },
  { icon: '🛍️', titulo: 'Loja', texto: 'Catálogo oficial Suerte Kimonos, com pedido combinado direto com o professor.' },
  { icon: '📋', titulo: 'Relatórios (Kids)', texto: 'Pais recebem relatórios de comportamento e evolução do seu filho(a), em PDF.' },
  { icon: '🔔', titulo: 'Notificações', texto: 'Lembrete de treino e avisos do professor direto no seu celular.' },
];

export default function SiteApp() {
  return (
    <div>
      <section className="site-hero">
        <div className="grid grid-2" style={{ maxWidth: 1000, margin: '0 auto', alignItems: 'center', gap: 40, textAlign: 'left', position: 'relative', zIndex: 1 }}>
          <div>
            <span className="site-hero-eyebrow">App do Aluno</span>
            <h1 style={{ textAlign: 'left' }}>Seu treino, sua evolução, no seu bolso.</h1>
            <p className="lead" style={{ textAlign: 'left', margin: '0 0 32px' }}>
              Todo aluno do CT tem acesso a um aplicativo próprio pra acompanhar presença, faixa,
              financeiro e muito mais — sem precisar perguntar nada pro professor.
            </p>
            <div className="site-hero-cta" style={{ justifyContent: 'flex-start' }}>
              <a href={`${APP_URL}/cadastro`} className="btn btn-primary">Criar minha conta</a>
              <a href={`${APP_URL}/entrar`} className="btn btn-ghost">Já tenho conta</a>
            </div>
          </div>
          <div className="site-phone">
            <div className="site-phone-glow" />
            <div className="site-phone-screen">
              <div className="site-phone-topbar">
                <span className="greeting">Olá, Aluno 👋</span>
                <span className="belt">Faixa Roxa</span>
              </div>
              <div className="site-phone-stats">
                <div className="site-phone-stat">
                  <span className="label">Sequência</span>
                  <span className="value">12 dias</span>
                </div>
                <div className="site-phone-stat">
                  <span className="label">Treinos</span>
                  <span className="value">18</span>
                </div>
                <div className="site-phone-stat">
                  <span className="label">Financeiro</span>
                  <span className="value">Em dia</span>
                </div>
              </div>
              <div className="site-phone-checkin">
                <div className="t">Marcar presença hoje</div>
                <div className="btn-mini">Marcar presença agora</div>
              </div>
              <div className="site-phone-history">
                <div className="h">Histórico recente</div>
                <div className="site-phone-history-row"><span>22/07 às 19:30</span><span className="ok">Presente</span></div>
                <div className="site-phone-history-row"><span>21/07 às 19:30</span><span className="ok">Presente</span></div>
                <div className="site-phone-history-row"><span>19/07 às 16:00</span><span className="ok">Presente</span></div>
              </div>
            </div>
            <div className="site-store-badges">
              <div className="site-store-badge">
                <span className="glyph">▶</span>
                <span>
                  <span className="label">Disponível no</span>
                  <span className="name">Google Play</span>
                </span>
              </div>
              <div className="site-store-badge">
                <span className="glyph"></span>
                <span>
                  <span className="label">Disponível na</span>
                  <span className="name">App Store</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="site-section">
        <div className="site-section-head">
          <div className="site-section-eyebrow">O que tem no app</div>
          <h2>Tudo que você precisa, num só lugar</h2>
        </div>
        <div className="grid grid-2" style={{ maxWidth: 900, margin: '0 auto' }}>
          {FEATURES.map((f) => (
            <div key={f.titulo} className="site-feature-row">
              <span className="icon">{f.icon}</span>
              <div>
                <h4>{f.titulo}</h4>
                <p>{f.texto}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="site-band">
        <div className="site-section text-center">
          <div className="site-section-eyebrow">Disponibilidade</div>
          <h2 style={{ marginBottom: 8 }}>Acesse direto do navegador</h2>
          <p className="muted" style={{ maxWidth: 480, margin: '0 auto' }}>
            Disponível para Android e iOS nas lojas de aplicativo, ou direto pelo navegador — sem
            precisar instalar nada, funciona em qualquer celular ou computador.
          </p>
        </div>
      </section>

      <section className="site-cta-band">
        <h2>Já é aluno do CT?</h2>
        <p>Crie sua conta grátis e comece a acompanhar sua evolução hoje mesmo.</p>
        <div className="site-hero-cta">
          <a href={`${APP_URL}/cadastro`} className="btn btn-primary">Criar minha conta</a>
          <a href={`${APP_URL}/entrar`} className="btn btn-ghost">Já tenho conta</a>
        </div>
      </section>
    </div>
  );
}

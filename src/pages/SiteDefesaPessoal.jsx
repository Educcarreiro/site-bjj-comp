import logoLadpp from '../assets/ladpp.png';
import logoLadfic from '../assets/ladfic.png';

const INSCRICAO_URL = 'https://doity.com.br/alem-do-silencio-enfrentamento-a-importunacao-sexual-e-defesa-pessoal-para-mulheres';

// Logos das ligas/instituições parceiras. A faixa duplica a lista e roda em loop
// infinito, então funciona igual com 2 ou 10 parceiros.
const PARCEIROS = [
  { nome: 'Liga Acadêmica de Direito Processual Penal', logo: logoLadpp },
  { nome: 'Liga Acadêmica de Direito Civil', logo: logoLadfic },
];

const FATOS = [
  { label: 'Data', valor: '12 de setembro' },
  { label: 'Horário', valor: '09h às 12h (3h)' },
  { label: 'Local', valor: 'CT Thiago Martiniano' },
  { label: 'Investimento', valor: 'R$ 100,00' },
  { label: 'Vagas por turma', valor: '20 participantes' },
];

const SECOES = [
  {
    titulo: 'Sobre o projeto',
    texto: 'Uma ação da Liga Acadêmica de Direito Processual Penal (UCSAL) para conscientizar sobre o crime de Importunação Sexual (art. 215-A) — da denúncia à rede de apoio às vítimas.',
  },
  {
    titulo: 'Do direito ao tatame',
    texto: 'Após a palestra jurídica, uma oficina prática de Defesa Pessoal Feminina com a Prof.ª Daiane Vianna, faixa-preta de Jiu-Jítsu e advogada. Defesa pessoal como proteção — nunca como incentivo ao confronto.',
  },
  {
    titulo: 'Certificados',
    texto: 'Dois certificados independentes: 1 hora pela LADPP, referente à palestra jurídica, e 2 horas pelo CT Thiago Martiniano, referente à oficina prática.',
  },
  {
    titulo: 'Investimento e vagas',
    texto: 'R$ 100 por participante, 100% revertidos pra estrutura do CT. Turmas de 20 vagas — novas turmas se abrem conforme a procura.',
  },
  {
    titulo: 'Turma gratuita para a extensão',
    texto: 'Em agradecimento à Coordenação de Extensão, uma turma exclusiva e gratuita para as colaboradoras da universidade.',
  },
  {
    titulo: 'Sobre a iniciativa',
    texto: 'Muitas mulheres enfrentam violência em silêncio, por medo ou desconhecimento. O "Além do Silêncio" nasce para romper esse ciclo — com informação, acolhimento e prevenção.',
  },
];

export default function SiteDefesaPessoal() {
  return (
    <div>
      <section className="site-hero">
        <span className="site-hero-eyebrow">Curso de Defesa Pessoal</span>
        <h1>Defesa Pessoal Feminina</h1>
        <p className="lead">
          Um projeto de extensão em parceria com a Liga Acadêmica de Direito Processual Penal (UCSAL),
          unindo educação jurídica e defesa pessoal prática num só evento.
        </p>
        <div className="site-hero-cta">
          <a href={INSCRICAO_URL} target="_blank" rel="noreferrer" className="btn btn-primary">Inscreva-se</a>
        </div>
      </section>

      <section className="site-section" style={{ paddingTop: 0 }}>
        <div className="card mb-16" style={{ maxWidth: 760, margin: '0 auto 16px' }}>
          <div className="site-section-eyebrow">Próximo curso</div>
          <h2 style={{ fontSize: 24, fontWeight: 800, letterSpacing: '-0.02em', marginBottom: 8 }}>
            Além do Silêncio: Enfrentamento à Importunação Sexual e Defesa Pessoal para Mulheres
          </h2>
          <p className="muted" style={{ fontSize: 14.5, lineHeight: 1.7, marginBottom: 22 }}>
            Uma ação extensionista da Liga Acadêmica de Direito Processual Penal (LADPP), aproximando
            o conhecimento jurídico da realidade social por meio da educação, prevenção e empoderamento.
          </p>

          <div className="grid grid-2" style={{ gap: 12, marginBottom: 22 }}>
            {FATOS.map((f) => (
              <div key={f.label} style={{ background: 'rgba(var(--overlay-rgb), 0.04)', border: '1px solid var(--glass-border)', borderRadius: 14, padding: '12px 16px' }}>
                <div className="muted" style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 3 }}>{f.label}</div>
                <div style={{ fontWeight: 700, fontSize: 15 }}>{f.valor}</div>
              </div>
            ))}
          </div>

          <a href={INSCRICAO_URL} target="_blank" rel="noreferrer" className="btn btn-primary">Garantir minha vaga</a>
        </div>

        <div style={{ maxWidth: 620, margin: '0 auto' }}>
          {SECOES.map((s, i) => (
            <div
              key={s.titulo}
              style={{
                display: 'flex',
                gap: 20,
                padding: '24px 0',
                borderTop: i === 0 ? 'none' : '1px solid var(--glass-border)',
              }}
            >
              <div className="muted" style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.04em', flexShrink: 0, width: 24, paddingTop: 2 }}>
                {String(i + 1).padStart(2, '0')}
              </div>
              <div>
                <h3 style={{ fontSize: 15.5, fontWeight: 700, marginBottom: 8, letterSpacing: '-0.01em' }}>{s.titulo}</h3>
                <p className="muted" style={{ fontSize: 14, lineHeight: 1.75, margin: 0 }}>{s.texto}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="site-section" style={{ paddingBottom: 0 }}>
        <div className="site-section-head" style={{ marginBottom: 28 }}>
          <div className="site-section-eyebrow">Parceiros</div>
          <h2 style={{ fontSize: 22 }}>Ligas e instituições parceiras</h2>
        </div>
        <div className="site-partners-track-wrap">
          <div className="site-partners-track">
            {[...PARCEIROS, ...PARCEIROS].map((p, i) => (
              <div className="site-partners-item" key={i}>
                {p.logo ? <img src={p.logo} alt={p.nome} /> : <span>{p.nome}</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="site-cta-band">
        <h2>Garanta sua vaga</h2>
        <p>Inscrição e pagamento feitos direto pela nossa plataforma parceira.</p>
        <div className="site-hero-cta">
          <a href={INSCRICAO_URL} target="_blank" rel="noreferrer" className="btn btn-primary">Inscreva-se agora</a>
        </div>
      </section>
    </div>
  );
}

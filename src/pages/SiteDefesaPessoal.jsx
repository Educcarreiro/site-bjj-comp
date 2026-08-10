import { useState } from 'react';
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

export default function SiteDefesaPessoal() {
  const [open, setOpen] = useState(false);

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
          <button type="button" className="btn btn-primary" onClick={() => setOpen(true)}>Inscreva-se</button>
        </div>
      </section>

      <section className="site-section" style={{ paddingTop: 0 }}>
        <div className="card mb-16">
          <div className="site-section-eyebrow">Próximo curso</div>
          <h2 style={{ fontSize: 26, fontWeight: 800, letterSpacing: '-0.02em', marginBottom: 8 }}>
            Além do Silêncio: Enfrentamento à Importunação Sexual e Defesa Pessoal para Mulheres
          </h2>
          <p className="muted" style={{ lineHeight: 1.7, marginBottom: 24 }}>
            Uma ação extensionista promovida pela Liga Acadêmica de Direito Processual Penal (LADPP),
            com o objetivo de aproximar o conhecimento jurídico da realidade social, promovendo
            educação, prevenção e empoderamento por meio de uma abordagem interdisciplinar.
          </p>

          <div className="grid grid-2" style={{ gap: 14, marginBottom: 24 }}>
            {FATOS.map((f) => (
              <div key={f.label} style={{ background: 'rgba(var(--overlay-rgb), 0.04)', border: '1px solid var(--glass-border)', borderRadius: 14, padding: '14px 18px' }}>
                <div className="muted" style={{ fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 4 }}>{f.label}</div>
                <div style={{ fontWeight: 700, fontSize: 16 }}>{f.valor}</div>
              </div>
            ))}
          </div>

          <button type="button" className="btn btn-primary" onClick={() => setOpen(true)}>Garantir minha vaga</button>
        </div>

        <div className="flex flex-col gap-16">
          <div className="card">
            <div className="card-title">Sobre o projeto</div>
            <p style={{ lineHeight: 1.75, marginBottom: 14 }}>
              O projeto busca conscientizar a comunidade acadêmica e a sociedade acerca do crime de
              Importunação Sexual (art. 215-A do Código Penal), diferenciando-o de outros delitos contra
              a dignidade sexual, como o assédio sexual e o estupro, além de apresentar os mecanismos
              legais de denúncia, produção de provas, medidas de proteção e a rede de apoio disponível
              às vítimas.
            </p>
            <p style={{ lineHeight: 1.75 }}>
              A proposta vai além da teoria jurídica. Considerando que a extensão universitária tem como
              finalidade produzir impacto social concreto, o evento será realizado integralmente no
              Centro de Treinamento Thiago Martiniano – Escola de Jiu-Jítsu, local que oferece estrutura
              adequada para a realização da parte prática da programação e teórica também.
            </p>
          </div>

          <div className="card">
            <div className="card-title">Do direito ao tatame</div>
            <p style={{ lineHeight: 1.75, marginBottom: 14 }}>
              A escolha do tatame não possui caráter esportivo, mas sim pedagógico. Após a palestra
              jurídica, as participantes terão uma oficina de Defesa Pessoal Feminina, ministrada pela
              Prof.ª Daiane Vianna, formada em direito, faixa-preta de Jiu-Jítsu, na qual serão ensinadas
              técnicas básicas de autoproteção, desvencilhamento e prevenção de situações de violência,
              reforçando que a defesa pessoal deve ser compreendida como um recurso de proteção da
              integridade física e nunca como incentivo ao confronto.
            </p>
            <p style={{ lineHeight: 1.75 }}>
              Essa integração entre Direito e prática proporciona uma experiência extensionista completa,
              permitindo que as participantes compreendam não apenas os aspectos legais da violência
              contra a mulher, mas também desenvolvam conhecimentos práticos voltados à prevenção e à
              autoproteção.
            </p>
          </div>

          <div className="card">
            <div className="card-title">Certificados</div>
            <p style={{ lineHeight: 1.75, marginBottom: 14 }}>
              Ao final da atividade, serão emitidos dois certificados independentes, correspondentes às
              competências desenvolvidas durante o evento:
            </p>
            <ul style={{ margin: 0, paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 10 }}>
              <li style={{ lineHeight: 1.7 }}>
                <strong>Certificado de 1 hora</strong>, emitido pela Liga Acadêmica de Direito Processual
                Penal, referente à participação na palestra jurídica e às discussões sobre os aspectos
                penais, processuais e sociais da importunação sexual.
              </li>
              <li style={{ lineHeight: 1.7 }}>
                <strong>Certificado de 2 horas</strong>, emitido pelo CT Thiago Martiniano – Escola de
                Jiu-Jítsu, referente à oficina prática de Defesa Pessoal Feminina.
              </li>
            </ul>
          </div>

          <div className="card">
            <div className="card-title">Investimento e vagas</div>
            <p style={{ lineHeight: 1.75, marginBottom: 14 }}>
              O investimento para participação será de <strong>R$ 100,00</strong> por participante.
              Esclarece-se que 100% do valor arrecadado será destinado ao CT Thiago Martiniano – Escola
              de Jiu-Jítsu, como forma de custear a utilização da estrutura física, do tatame, dos
              equipamentos e da instrução técnica da oficina prática de defesa pessoal. A Liga Acadêmica
              de Direito Processual Penal não possui finalidade lucrativa com a realização deste evento.
            </p>
            <p style={{ lineHeight: 1.75 }}>
              Cada turma contará com <strong>20 participantes</strong>, número definido para garantir a
              qualidade do aprendizado, a segurança durante as atividades práticas e o acompanhamento
              individualizado pela instrutora. Caso a procura ultrapasse a quantidade de vagas
              disponíveis, novas turmas poderão ser abertas, mantendo a mesma programação e metodologia.
            </p>
          </div>

          <div className="card">
            <div className="card-title">Turma gratuita para a equipe da extensão</div>
            <p style={{ lineHeight: 1.75 }}>
              Como forma de reconhecimento e agradecimento pelo apoio da Coordenação de Extensão, a Liga
              Acadêmica de Direito Processual Penal, em parceria com o CT Thiago Martiniano, disponibiliza
              uma turma exclusiva e gratuita de Defesa Pessoal Feminina para as colaboradoras da Extensão
              Universitária, sem a cobrança do investimento previsto para o público geral.
            </p>
          </div>

          <div className="card">
            <div className="card-title">Sobre a iniciativa</div>
            <p style={{ lineHeight: 1.75, marginBottom: 14 }}>
              Infelizmente, muitas mulheres enfrentam situações de importunação, assédio e outras formas
              de violência sem saber como identificar essas condutas, quais são seus direitos ou como
              buscar ajuda. Em muitos casos, essas experiências permanecem em silêncio, seja por medo,
              vergonha ou desconhecimento. O projeto "Além do Silêncio" nasce para contribuir com a
              quebra desse ciclo por meio da informação, do acolhimento e da prevenção.
            </p>
            <p style={{ lineHeight: 1.75 }}>
              A Liga Acadêmica de Direito Processual Penal conta com a colaboração da Coordenação de
              Extensão para a realização deste projeto, e espera que essa seja a primeira de muitas
              iniciativas desenvolvidas em parceria, ampliando o alcance de ações voltadas à cidadania,
              à educação em direitos e à prevenção da violência de gênero.
            </p>
          </div>
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
          <button type="button" className="btn btn-primary" onClick={() => setOpen(true)}>Inscreva-se agora</button>
        </div>
      </section>

      {open && (
        <div className="modal-overlay" onClick={() => setOpen(false)}>
          <div
            className="card"
            style={{ maxWidth: 720, width: '100%', height: '85vh', padding: 0, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center" style={{ padding: '14px 20px', borderBottom: '1px solid var(--glass-border)' }}>
              <span style={{ fontWeight: 700 }}>Inscrição — Além do Silêncio</span>
              <button type="button" className="btn btn-ghost btn-sm" onClick={() => setOpen(false)}>Fechar ✕</button>
            </div>
            <iframe
              src={INSCRICAO_URL}
              title="Inscrição — Além do Silêncio"
              style={{ flex: 1, border: 0, width: '100%' }}
            />
            <div style={{ padding: '12px 20px', borderTop: '1px solid var(--glass-border)', textAlign: 'center' }}>
              <a href={INSCRICAO_URL} target="_blank" rel="noreferrer" className="muted" style={{ fontSize: 13 }}>
                A página não carregou? Abrir em uma nova aba →
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

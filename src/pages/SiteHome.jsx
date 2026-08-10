import { Link } from 'react-router-dom';
import { ShowerHead, Droplets, Wifi as WifiIcon, Camera } from 'lucide-react';
import SiteScheduleGrid from '../components/SiteScheduleGrid';
import professores from '../assets/professores-aula-particular.png';
import homeHero from '../assets/home-hero.jpg';
import { APP_URL } from '../config';

const AMENITIES = [
  { Icon: ShowerHead, label: 'Chuveiro' },
  { Icon: Droplets, label: 'Bebedouro' },
  { Icon: WifiIcon, label: 'Wi-Fi liberado' },
  { Icon: Camera, label: 'Câmeras de segurança' },
];

const BENEFICIOS = [
  { titulo: 'Condicionamento completo', texto: 'Um treino que trabalha força, resistência e mobilidade — sem monotonia de academia.' },
  { titulo: 'Defesa pessoal de verdade', texto: 'Técnicas aplicáveis, ensinadas com progressão segura pra qualquer nível.' },
  { titulo: 'Disciplina e autoconfiança', texto: 'O jiu-jitsu ensina a lidar com pressão — no tatame e fora dele.' },
  { titulo: 'Comunidade de verdade', texto: 'Um ambiente acolhedor, com veteranos e iniciantes treinando lado a lado.' },
];

const WHATSAPP_GERAL = 'https://wa.me/5571993333330?text=' + encodeURIComponent('Oi! Quero saber mais sobre o CT Thiago Martiniano.');
const WHATSAPP_PARTICULAR = 'https://wa.me/5571993333330?text=' + encodeURIComponent('Oi! Tenho interesse numa aula particular no CT.');

export default function SiteHome() {
  return (
    <div>
      <section className="site-home-hero">
        <img src={homeHero} alt="Disciplina, Foco, Evolução — CT Thiago Martiniano" />
        <div className="site-home-hero-cta">
          <a href="#adulto" className="btn btn-primary">Conheça a escola</a>
          <a href={WHATSAPP_GERAL} target="_blank" rel="noreferrer" className="btn btn-ghost" style={{ borderColor: 'rgba(255,255,255,0.35)', color: '#fff' }}>
            Fale conosco
          </a>
        </div>
      </section>

      <section className="site-section" style={{ paddingBottom: 0 }}>
        <Link
          to="/defesa-pessoal"
          className="card"
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap', color: 'inherit' }}
        >
          <div>
            <div className="site-section-eyebrow" style={{ marginBottom: 6 }}>Evento especial · 12 de setembro</div>
            <strong style={{ fontSize: 17 }}>Curso de Defesa Pessoal Feminina — em parceria com a UCSAL</strong>
          </div>
          <span className="btn btn-primary btn-sm">Saiba mais</span>
        </Link>
      </section>

      <section className="site-section">
        <div className="site-section-head">
          <div className="site-section-eyebrow">Modalidades</div>
          <h2>Um espaço pra cada fase da sua jornada</h2>
          <p>Turmas separadas por objetivo e idade, sempre com professor de perto acompanhando a evolução.</p>
        </div>
        <div className="site-grid">
          <a href="#adulto" className="site-card" style={{ color: 'inherit' }}>
            <h3>Jiu-Jitsu Adulto</h3>
            <p>Turmas para todos os níveis, do iniciante ao avançado, incluindo turma feminina e aula particular.</p>
          </a>
          <Link to="/kids" className="site-card" style={{ color: 'inherit' }}>
            <h3>Kids</h3>
            <p>Aulas lúdicas pensadas pra criançada aprender disciplina, respeito e jiu-jitsu se divertindo.</p>
          </Link>
          <Link to="/app" className="site-card" style={{ color: 'inherit' }}>
            <h3>App do Aluno</h3>
            <p>Presença, faixa, financeiro e evolução — tudo acompanhado pelo aplicativo do CT.</p>
          </Link>
        </div>
      </section>

      <section className="site-band">
        <div className="site-section">
          <div className="site-section-head">
            <div className="site-section-eyebrow">A Unidade</div>
            <h2>Uma academia moderna no Stiep</h2>
            <p>
              Nosso espaço foi projetado pra você treinar, evoluir e se renovar com conforto e qualidade.
              Turmas para crianças, jovens e adultos — dos iniciantes aos avançados — coletivas ou particulares.
            </p>
          </div>
          <div className="site-amenities">
            {AMENITIES.map(({ Icon, label }) => (
              <div key={label} className="site-amenity">
                <Icon strokeWidth={1.5} />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="site-section" id="adulto">
        <div className="site-section-head">
          <div className="site-section-eyebrow">Jiu-Jitsu Adulto</div>
          <h2>Evolua no seu ritmo, no tatame certo</h2>
          <p>Do primeiro dia de kimono até a faixa preta, com turma feminina e opção de aula particular.</p>
        </div>
        <div className="site-grid">
          {BENEFICIOS.map((b) => (
            <div key={b.titulo} className="site-card">
              <h3>{b.titulo}</h3>
              <p>{b.texto}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="site-band">
        <div className="site-section">
          <div className="site-section-head">
            <div className="site-section-eyebrow">Horários</div>
            <h2>Grade de turmas da semana</h2>
          </div>
          <SiteScheduleGrid />
        </div>
      </section>

      <section className="site-section">
        <div className="grid grid-2" style={{ alignItems: 'center', gap: 40 }}>
          <div>
            <div className="site-section-eyebrow">Aula Particular</div>
            <h2 style={{ fontSize: 30, fontWeight: 800, letterSpacing: '-0.02em', marginBottom: 14 }}>
              Quer evoluir mais rápido num detalhe do seu jogo?
            </h2>
            <p className="muted" style={{ lineHeight: 1.7, marginBottom: 24 }}>
              Marque uma aula individual com o Thiago ou a Day — atenção total num objetivo específico:
              corrigir um detalhe técnico, se preparar pra uma competição, ou simplesmente evoluir mais
              rápido no seu próprio ritmo.
            </p>
            <a href={WHATSAPP_PARTICULAR} target="_blank" rel="noreferrer" className="btn btn-primary">
              Marcar aula particular
            </a>
          </div>
          <img src={professores} alt="Professores Thiago e Daianne" className="site-premium-photo" />
        </div>
      </section>

      <section className="site-cta-band">
        <h2>Bora treinar?</h2>
        <p>Fala com a gente e vem conhecer o CT de pertinho.</p>
        <div className="site-hero-cta">
          <a href={WHATSAPP_GERAL} target="_blank" rel="noreferrer" className="btn btn-primary">Falar no WhatsApp</a>
          <a href={`${APP_URL}/cadastro`} className="btn btn-ghost">Quero me matricular</a>
        </div>
      </section>
    </div>
  );
}

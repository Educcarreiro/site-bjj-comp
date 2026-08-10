const DIAS = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'];

// Montado a partir dos mesmos horários reais usados no app (ScheduleTable).
const GRID = [
  { horario: '06:50', turmas: { Segunda: 'Turma Feminina', Quarta: 'Turma Feminina', Sexta: 'Turma Feminina' } },
  { horario: '16:00', turmas: { Segunda: 'Jiu-Jitsu Adulto', Quarta: 'Jiu-Jitsu Adulto', Sexta: 'Jiu-Jitsu Adulto' } },
  { horario: '18:00', turmas: { Segunda: 'Infantil', Quarta: 'Infantil', Quinta: 'Infantil' } },
  { horario: '19:30', turmas: { Segunda: 'Jiu-Jitsu Adulto', Terça: 'Jiu-Jitsu Adulto', Quarta: 'Jiu-Jitsu Adulto', Quinta: 'Jiu-Jitsu Adulto', Sexta: 'Jiu-Jitsu Adulto' } },
];

export default function SiteScheduleGrid() {
  return (
    <div className="site-schedule-grid-wrap">
      <table className="site-schedule-grid">
        <thead>
          <tr>
            <th>Horário</th>
            {DIAS.map((d) => <th key={d}>{d}</th>)}
          </tr>
        </thead>
        <tbody>
          {GRID.map((row) => (
            <tr key={row.horario}>
              <td className="hora">{row.horario}</td>
              {DIAS.map((d) => (
                <td key={d} className={row.turmas[d] ? `turma turma-${row.turmas[d] === 'Infantil' ? 'kids' : row.turmas[d] === 'Turma Feminina' ? 'fem' : 'adulto'}` : ''}>
                  {row.turmas[d] || '—'}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const LAT = -12.9812192;
const LNG = -38.4455151;
const MAPS_LINK = 'https://maps.app.goo.gl/R25AoAxjwmgiK3Ah8';

export default function MapEmbed() {
  return (
    <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
      <iframe
        title="Localização CT Thiago Martiniano"
        src={`https://www.google.com/maps?q=${LAT},${LNG}&z=16&output=embed`}
        width="100%"
        height="280"
        style={{ border: 0, display: 'block' }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <div className="flex justify-between items-center" style={{ padding: '14px 18px' }}>
        <span className="muted" style={{ fontSize: 13 }}>Stiep, Salvador — BA</span>
        <a href={MAPS_LINK} target="_blank" rel="noreferrer" className="btn btn-ghost btn-sm">
          Abrir no Google Maps
        </a>
      </div>
    </div>
  );
}

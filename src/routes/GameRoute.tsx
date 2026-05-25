const shellChecks = [
  'Route wiring is live for /game.',
  'Three.js packages are installed for future scene work.',
  'Vitest can exercise the route shell today.',
  'Build output is ready for the next graph tasks.'
];

export function GameRoute() {
  return (
    <section className="game-shell">
      <div className="page-panel page-panel--compact">
        <p className="eyebrow">Route /game</p>
        <h1>Game shell</h1>
        <p className="game-shell__lede">
          This route stays intentionally small so the interactive 3D chess
          scene can land without reworking the app shell.
        </p>
      </div>
      <div className="stage-card">
        <div className="stage-viewport">
          <div className="stage-viewport__label">3D stage placeholder</div>
          <p>Board scene mounts here</p>
        </div>
        <ul className="status-list">
          {shellChecks.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

import { Link } from 'react-router';

const foundationPillars = [
  {
    label: 'Typed foundation',
    value: 'React 19 + TypeScript'
  },
  {
    label: '3D ready',
    value: 'Three.js + React Three Fiber'
  },
  {
    label: 'Quality gates',
    value: 'Lint, Vitest, and build scripts'
  }
];

export function HomeRoute() {
  return (
    <section className="hero">
      <div className="hero-copy">
        <p className="eyebrow">Graph task chess-001</p>
        <h1>3D chess, scaffolded for fast iteration.</h1>
        <p className="hero-copy__lede">
          A browser-first foundation with routing, tests, and the core 3D
          runtime already wired in for the next chess graph tasks.
        </p>
        <div className="hero-actions">
          <Link className="button button--primary" to="/game">
            Launch game shell
          </Link>
          <a className="button button--ghost" href="#tooling">
            Inspect tooling
          </a>
        </div>
        <div className="stat-grid" id="tooling">
          {foundationPillars.map((pillar) => (
            <article className="stat-card" key={pillar.label}>
              <p className="stat-card__label">{pillar.label}</p>
              <p className="stat-card__value">{pillar.value}</p>
            </article>
          ))}
        </div>
      </div>
      <aside className="board-card" aria-label="Scaffold preview">
        <div className="board-card__frame">
          <div className="board-preview">
            <span className="board-preview__piece board-preview__piece--alpha">
              N
            </span>
            <span className="board-preview__piece board-preview__piece--beta">
              Q
            </span>
            <span className="board-preview__piece board-preview__piece--gamma">
              k
            </span>
          </div>
        </div>
        <p className="board-card__caption">
          Landing route is live now. The <code>/game</code> shell is ready for
          the future board scene.
        </p>
      </aside>
    </section>
  );
}

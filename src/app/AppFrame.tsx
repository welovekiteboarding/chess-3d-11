import { NavLink, Outlet } from 'react-router';

export function AppFrame() {
  return (
    <div className="app-shell">
      <header className="app-header">
        <NavLink className="brand-mark" to="/">
          <img alt="" className="brand-mark__icon" src="/knight-mark.svg" />
          <span className="brand-mark__copy">
            <span className="brand-mark__eyebrow">Royal Shift</span>
            <span className="brand-mark__title">Chess 3D</span>
          </span>
        </NavLink>
        <nav className="app-nav" aria-label="Primary">
          <NavLink className="app-nav__link" to="/">
            Home
          </NavLink>
          <NavLink className="app-nav__link" to="/game">
            Game shell
          </NavLink>
        </nav>
      </header>
      <main className="app-main">
        <Outlet />
      </main>
    </div>
  );
}

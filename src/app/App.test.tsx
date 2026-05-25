import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { describe, expect, it } from 'vitest';

import { AppRoutes } from './AppRoutes';

function renderRoute(route: string) {
  return render(
    <MemoryRouter initialEntries={[route]}>
      <AppRoutes />
    </MemoryRouter>
  );
}

describe('app routing', () => {
  it('renders the landing page on the home route', () => {
    renderRoute('/');

    expect(
      screen.getByRole('heading', { name: /3d chess, scaffolded for fast iteration/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: /launch game shell/i })
    ).toHaveAttribute('href', '/game');
  });

  it('renders the game shell route', () => {
    renderRoute('/game');

    expect(
      screen.getByRole('heading', { name: /game shell/i })
    ).toBeInTheDocument();
    expect(screen.getByText(/board scene mounts here/i)).toBeInTheDocument();
  });
});

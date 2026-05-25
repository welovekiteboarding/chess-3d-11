# chess-3d-11

Initial scaffold for a browser-based 3D chess app.

## What is in this scaffold

- `Vite + React + TypeScript` for a fast typed frontend baseline
- `react-router` with two live routes:
  - `/` for the landing screen
  - `/game` for the minimal game shell
- `three` and `@react-three/fiber` installed so later graph tasks can add the 3D board without replacing the stack
- `Vitest` and `Testing Library` for route and component tests
- `ESLint` and `Prettier` for code quality and formatting

## Local setup

This project is meant to work from a clean checkout with one install command.

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

3. Open the local URL printed by Vite.
   In most setups this will be `http://localhost:5173`.

4. Visit:
   - `/` for the landing page
   - `/game` for the game shell route

This workspace was scaffolded and checked on Node `v23.11.0` and npm `10.9.2`.

## Validation commands

Use these commands to verify the scaffold:

```bash
npm run lint
npm run test -- --run
npm run build
```

## Project structure

```text
public/
  knight-mark.svg
src/
  app/
  routes/
  styles/
  test/
```

## Next graph tasks

This scaffold stops at the app shell. The actual chess engine, 3D board scene, and move interaction belong to later graph tasks.

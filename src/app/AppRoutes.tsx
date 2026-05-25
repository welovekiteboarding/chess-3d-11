import { Navigate, Route, Routes } from 'react-router';

import { AppFrame } from './AppFrame';
import { GameRoute } from '../routes/GameRoute';
import { HomeRoute } from '../routes/HomeRoute';

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<AppFrame />}>
        <Route index element={<HomeRoute />} />
        <Route path="game" element={<GameRoute />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Route>
    </Routes>
  );
}

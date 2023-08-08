import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
const App = lazy(() => import('./App'));
const Home = lazy(() => import('./pages/Home'));
const PublicLayout = lazy(() => import('./layouts/PublicLayout'));

const FALLBACK_LOADING_STYLE = {
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

export function Router() {
  return (
    <Suspense fallback={<div style={FALLBACK_LOADING_STYLE}>Loading...</div>}>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route index element={<App />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

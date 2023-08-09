import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PublicLayout } from './layouts/PublicLayout';
import { App } from './App';
import { Loading } from '@/Loading';
const Home = lazy(() => import('./pages/Home'));

export function Router() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          <Route
            path="home"
            element={
              <Suspense fallback={<Loading />}>
                <Home />
              </Suspense>
            }
          />
          <Route index element={<App />} />
          <Route path="*" element={<h1>404</h1>} />
        </Route>
      </Routes>
    </Suspense>
  );
}

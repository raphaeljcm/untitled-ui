import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PublicLayout } from './layouts/PublicLayout';
import { App } from './App';
import { Loading } from '@/Loading';
import { APP_ROUTES } from './consts/routes';
const Home = lazy(() => import('./pages/Home'));

export function Router() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path={APP_ROUTES.APP} element={<PublicLayout />}>
          <Route
            path={APP_ROUTES.HOME}
            element={
              <Suspense fallback={<Loading />}>
                <Home />
              </Suspense>
            }
          />
          <Route index element={<App />} />
        </Route>

        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </Suspense>
  );
}

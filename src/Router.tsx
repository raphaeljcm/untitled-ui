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
        <Route element={<PublicLayout />}>
          <Route path="/home" element={<Home />} />
          <Route index element={<App />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

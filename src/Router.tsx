import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PublicLayout } from './layouts/PublicLayout';
import { App } from './App';
import { Loading } from '@/Loading';
import { APP_ROUTES } from './consts/routes';

const Home = lazy(() => import('./pages/Home'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Projects = lazy(() => import('./pages/Projects'));
const Reporting = lazy(() => import('./pages/Reporting'));
const Settings = lazy(() => import('./pages/Settings'));
const Support = lazy(() => import('./pages/Support'));
const Tasks = lazy(() => import('./pages/Tasks'));
const Users = lazy(() => import('./pages/Users'));

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
          <Route
            path={APP_ROUTES.DASHBOARD}
            element={
              <Suspense fallback={<Loading />}>
                <Dashboard />
              </Suspense>
            }
          />
          <Route
            path={APP_ROUTES.PROJECTS}
            element={
              <Suspense fallback={<Loading />}>
                <Projects />
              </Suspense>
            }
          />
          <Route
            path={APP_ROUTES.REPORTING}
            element={
              <Suspense fallback={<Loading />}>
                <Reporting />
              </Suspense>
            }
          />
          <Route
            path={APP_ROUTES.SETTINGS}
            element={
              <Suspense fallback={<Loading />}>
                <Settings />
              </Suspense>
            }
          />
          <Route
            path={APP_ROUTES.SUPPORT}
            element={
              <Suspense fallback={<Loading />}>
                <Support />
              </Suspense>
            }
          />
          <Route
            path={APP_ROUTES.TASKS}
            element={
              <Suspense fallback={<Loading />}>
                <Tasks />
              </Suspense>
            }
          />
          <Route
            path={APP_ROUTES.USERS}
            element={
              <Suspense fallback={<Loading />}>
                <Users />
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

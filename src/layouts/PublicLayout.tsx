import { Outlet } from 'react-router-dom';
import { Sidebar } from '@/Sidebar';

export function PublicLayout() {
  return (
    <div className="grid h-screen grid-cols-app font-inter">
      <Sidebar />

      <main className="px-4 pb-12 pt-24 lg:col-start-2 lg:px-8 lg:pt-8">
        <Outlet />
      </main>
    </div>
  );
}

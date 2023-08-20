import { Outlet } from 'react-router-dom';
import { Sidebar } from '@/Sidebar';

export function PublicLayout() {
  return (
    <div className="grid h-screen grid-cols-app font-inter">
      <Sidebar />

      <main className="overflow-y-scroll px-8 pb-12 pt-8">
        <Outlet />
      </main>
    </div>
  );
}

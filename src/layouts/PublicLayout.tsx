import { Outlet } from 'react-router-dom';
import { Sidebar } from '@/Sidebar';

export function PublicLayout() {
  return (
    <div className="min-h-screen font-inter dark:bg-zinc-900 lg:grid lg:grid-cols-app">
      <Sidebar />

      <main className="max-w-[100vw] px-4 pb-12 pt-24 lg:col-start-2 lg:px-8 lg:pt-8">
        <Outlet />
      </main>
    </div>
  );
}

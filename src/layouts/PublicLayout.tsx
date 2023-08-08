import { Outlet } from 'react-router-dom';

export default function PublicLayout() {
  return (
    <div className="grid min-h-screen grid-cols-app font-inter">
      <aside className="border-r border-zinc-200 px-5 py-8">sidebar</aside>

      <main className="px-4 pb-12 pt-8">
        <Outlet />
      </main>
    </div>
  );
}

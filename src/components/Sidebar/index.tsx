import {
  BarChart,
  CheckSquare,
  Flag,
  Search,
  SquareStack,
  Users,
  Home,
  LifeBuoy,
  Cog,
} from 'lucide-react';
import { Logo } from './Logo';
import { NavItem } from './NavItem';
import { APP_ROUTES } from 'src/consts/routes';
import { UsedSpaceWidget } from './UsedSpaceWidget';

export function Sidebar() {
  return (
    <aside className="flex flex-col gap-6 border-r border-zinc-200 px-5 py-8">
      <Logo />

      <div className="mx-1 flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm">
        <Search className="h-5 w-5 text-zinc-500" />
        <input
          type="search"
          className="w-full border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600"
          placeholder="Search"
        />
      </div>

      <nav className="space-y-0.5">
        <NavItem title="Home" icon={Home} to={APP_ROUTES.HOME} />
        <NavItem title="Dashboard" icon={BarChart} to={APP_ROUTES.DASHBOARD} />
        <NavItem title="Projects" icon={SquareStack} to={APP_ROUTES.PROJECTS} />
        <NavItem title="Tasks" icon={CheckSquare} to={APP_ROUTES.TASKS} />
        <NavItem title="Reporting" icon={Flag} to={APP_ROUTES.REPORTING} />
        <NavItem title="Users" icon={Users} to={APP_ROUTES.USERS} />
      </nav>

      <div className="mt-auto flex flex-col gap-6">
        <nav className="space-y-0.5">
          <NavItem title="Support" icon={LifeBuoy} to={APP_ROUTES.SUPPORT} />
          <NavItem title="Settings" icon={Cog} to={APP_ROUTES.SETTINGS} />
        </nav>

        <UsedSpaceWidget />
      </div>
    </aside>
  );
}

import { APP_ROUTES } from 'src/consts/routes';
import { NavItem } from './NavItem';
import {
  BarChart,
  CheckSquare,
  Flag,
  SquareStack,
  Users,
  Home,
} from 'lucide-react';

export function MainNavbar() {
  return (
    <nav className="space-y-0.5">
      <NavItem title="Home" icon={Home} to={APP_ROUTES.HOME} />
      <NavItem title="Dashboard" icon={BarChart} to={APP_ROUTES.DASHBOARD} />
      <NavItem title="Projects" icon={SquareStack} to={APP_ROUTES.PROJECTS} />
      <NavItem title="Tasks" icon={CheckSquare} to={APP_ROUTES.TASKS} />
      <NavItem title="Reporting" icon={Flag} to={APP_ROUTES.REPORTING} />
      <NavItem title="Users" icon={Users} to={APP_ROUTES.USERS} />
    </nav>
  );
}

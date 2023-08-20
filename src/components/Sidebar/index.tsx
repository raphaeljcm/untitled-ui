import { LifeBuoy, Cog, Search } from 'lucide-react';
import { Logo } from './Logo';
import { NavItem } from './NavItem';
import { APP_ROUTES } from 'src/consts/routes';
import { UsedSpaceWidget } from './UsedSpaceWidget';
import { Profile } from './Profile';
import { Input } from '@/Input';
import { MainNavbar } from './MainNavbar';

export function Sidebar() {
  return (
    <aside className="flex flex-col gap-6 border-r border-zinc-200 px-5 py-8">
      <Logo />

      <Input.Root>
        <Input.Prefix>
          <Search className="h-5 w-5 text-zinc-500" />
        </Input.Prefix>
        <Input.Control placeholder="Search" type="search" />
      </Input.Root>

      <MainNavbar />

      <div className="mt-auto flex flex-col gap-6">
        <nav className="space-y-0.5">
          <NavItem title="Support" icon={LifeBuoy} to={APP_ROUTES.SUPPORT} />
          <NavItem title="Settings" icon={Cog} to={APP_ROUTES.SETTINGS} />
        </nav>

        <UsedSpaceWidget />

        <div className="h-px bg-zinc-200" />

        <Profile />
      </div>
    </aside>
  );
}

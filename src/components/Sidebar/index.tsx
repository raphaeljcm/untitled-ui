import * as RadixCollapsible from '@radix-ui/react-collapsible';
import { LifeBuoy, Cog, Search, Menu } from 'lucide-react';
import { Logo } from './Logo';
import { NavItem } from './NavItem';
import { APP_ROUTES } from 'src/consts/routes';
import { UsedSpaceWidget } from './UsedSpaceWidget';
import { Profile } from './Profile';
import { Input } from '@/Input';
import { MainNavbar } from './MainNavbar';
import { Button } from '@/Button';

export function Sidebar() {
  return (
    <RadixCollapsible.Root className="fixed left-0 right-0 top-0 z-20 flex flex-col gap-6 border-b border-zinc-200 bg-white p-4 data-[state=open]:bottom-0 dark:border-zinc-800 dark:bg-zinc-900 lg:right-auto lg:w-80 lg:border-r lg:px-5 lg:py-8 lg:data-[state=closed]:bottom-0">
      <div className="flex items-center justify-between">
        <Logo />
        <RadixCollapsible.Trigger asChild className="lg:hidden">
          <Button variant="ghost">
            <Menu className="h-6 w-6" />
          </Button>
        </RadixCollapsible.Trigger>
      </div>

      <RadixCollapsible.Content
        forceMount
        className="flex flex-1 flex-col gap-6 data-[state=closed]:hidden lg:data-[state=closed]:flex"
      >
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

          <div className="h-px bg-zinc-200 dark:bg-zinc-700" />

          <Profile />
        </div>
      </RadixCollapsible.Content>
    </RadixCollapsible.Root>
  );
}

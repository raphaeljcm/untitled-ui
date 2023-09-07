import { ElementType } from 'react';
import { ChevronDown } from 'lucide-react';
import { NavLink, To } from 'react-router-dom';

interface NavItemProps {
  title: string;
  icon: ElementType;
  to: To;
}

const DEFAULT_LINK_STYLES =
  'flex items-center gap-3 rounded px-3 py-2 hover:bg-violet-50 transition-colors dark:hover:bg-zinc-800';

export function NavItem({ title, icon: Icon, to }: NavItemProps) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? `${DEFAULT_LINK_STYLES} bg-violet-50 dark:bg-zinc-900`
          : DEFAULT_LINK_STYLES
      }
    >
      {({ isActive }) => (
        <>
          <Icon
            className="h-5 w-5 text-zinc-500 data-[active=true]:text-violet-500"
            data-active={isActive}
          />
          <span
            className="font-medium text-zinc-700 transition-colors group-hover:text-violet-500 data-[active=true]:text-violet-500 dark:text-zinc-100 dark:group-hover:text-violet-300"
            data-active={isActive}
          >
            {title}
          </span>
          <ChevronDown
            className="ml-auto h-5 w-5 text-zinc-400 transition-colors data-[active=true]:text-violet-500"
            data-active={isActive}
          />
        </>
      )}
    </NavLink>
  );
}

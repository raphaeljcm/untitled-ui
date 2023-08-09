import { ElementType } from 'react';
import { ChevronDown } from 'lucide-react';
import { NavLink, To } from 'react-router-dom';

interface NavItemProps {
  title: string;
  icon: ElementType;
  to: To;
}

const DEFAULT_LINK_STYLES =
  'flex items-center gap-3 rounded px-3 py-2 hover:bg-violet-50 transition-colors';

export function NavItem({ title, icon: Icon, to }: NavItemProps) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? `${DEFAULT_LINK_STYLES} bg-violet-50` : DEFAULT_LINK_STYLES
      }
    >
      {({ isActive }) => (
        <>
          <Icon className="h-5 w-5 text-zinc-500" />
          <span
            className="text-zinc-70 font-medium transition-colors data-[active=true]:text-violet-500"
            data-active={String(isActive)}
          >
            {title}
          </span>
          <ChevronDown
            className="ml-auto h-5 w-5 text-zinc-400 transition-colors data-[active=true]:text-violet-300"
            data-active={String(isActive)}
          />
        </>
      )}
    </NavLink>
  );
}

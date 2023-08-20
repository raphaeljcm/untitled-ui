interface HeaderProps {
  title: string;
}

export function Header({ title }: HeaderProps) {
  return <h1 className="text-3xl font-medium text-zinc-900">{title}</h1>;
}

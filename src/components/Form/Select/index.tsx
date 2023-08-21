import * as RadixSelect from '@radix-ui/react-select';
import { ChevronDown } from 'lucide-react';
import { ReactNode } from 'react';

interface SelectProps {
  placeholder: string;
  children: ReactNode;
}

export function Select({ placeholder, children }: SelectProps) {
  return (
    <RadixSelect.Root>
      <RadixSelect.Trigger className="flex h-11 w-full items-center justify-between gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm data-[placeholder]:text-zinc-600">
        <RadixSelect.Value className="text-black" placeholder={placeholder} />
        <RadixSelect.Icon>
          <ChevronDown className="h-5 w-5 text-zinc-500" />
        </RadixSelect.Icon>
      </RadixSelect.Trigger>

      <RadixSelect.Portal>
        <RadixSelect.Content
          side="bottom"
          position="popper"
          sideOffset={8}
          className="z-10 w-[--radix-select-trigger-width] overflow-hidden rounded-lg border border-zinc-200 bg-white"
        >
          <RadixSelect.Viewport>{children}</RadixSelect.Viewport>
        </RadixSelect.Content>
      </RadixSelect.Portal>
    </RadixSelect.Root>
  );
}

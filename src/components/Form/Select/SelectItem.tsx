import * as RadixSelect from '@radix-ui/react-select';
import { Check } from 'lucide-react';

type SelectItemProps = RadixSelect.SelectItemProps & {
  text: string;
};

export function SelectItem({ text, ...rest }: SelectItemProps) {
  return (
    <RadixSelect.Item
      className="flex items-center justify-between gap-2 rounded-lg px-3 py-2.5 outline-none data-[highlighted]:bg-zinc-50"
      {...rest}
    >
      <RadixSelect.ItemText className="text-black">{text}</RadixSelect.ItemText>

      <RadixSelect.ItemIndicator>
        <Check className="h-4 w-4 text-violet-500" />
      </RadixSelect.ItemIndicator>
    </RadixSelect.Item>
  );
}

import * as RadixTabs from '@radix-ui/react-tabs';
import * as RadixScrollArea from '@radix-ui/react-scroll-area';
import { TabItem } from './TabItem';
import { useState } from 'react';

interface TabsProps {
  tabs: {
    value: string;
    title: string;
  }[];
}

export function Tabs({ tabs }: TabsProps) {
  const [currentTab, setCurrentTab] = useState(tabs[0].value);

  return (
    <RadixTabs.Root value={currentTab} onValueChange={setCurrentTab}>
      <RadixScrollArea.Root type="scroll" className="w-full">
        <RadixScrollArea.Viewport className="w-full overflow-x-scroll">
          <RadixTabs.List className="mt-6 flex w-full items-center gap-4 border-b border-zinc-200 dark:border-zinc-700">
            {tabs.map(tab => (
              <TabItem
                key={tab.value}
                title={tab.title}
                value={tab.value}
                isSelected={currentTab === tab.value}
              />
            ))}
          </RadixTabs.List>
        </RadixScrollArea.Viewport>

        <RadixScrollArea.Scrollbar
          orientation="horizontal"
          className="flex h-0.5 translate-y-1.5 touch-none select-none flex-col bg-zinc-100"
        >
          <RadixScrollArea.Thumb className="relative flex-1 rounded-lg bg-zinc-300" />
        </RadixScrollArea.Scrollbar>
      </RadixScrollArea.Root>
    </RadixTabs.Root>
  );
}

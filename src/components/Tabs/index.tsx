import * as RadixTabs from '@radix-ui/react-tabs';
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
      <RadixTabs.List className="mt-6 flex w-full items-center gap-4 border-b border-zinc-200">
        {tabs.map(tab => (
          <TabItem
            key={tab.value}
            title={tab.title}
            value={tab.value}
            isSelected={currentTab === tab.value}
          />
        ))}
      </RadixTabs.List>
    </RadixTabs.Root>
  );
}

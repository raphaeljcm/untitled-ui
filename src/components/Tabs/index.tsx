import * as RadixTabs from '@radix-ui/react-tabs';
import { TabItem } from './TabItem';
import { useState } from 'react';
import { SettingTabValue } from 'src/pages/Settings';

interface TabsProps {
  tabs: {
    value: string;
    title: string;
  }[];
}

export function Tabs({ tabs }: TabsProps) {
  const [currentTab, setCurrentTab] = useState<SettingTabValue>('my-details');

  return (
    <RadixTabs.Root
      value={currentTab}
      onValueChange={value => setCurrentTab(value as SettingTabValue)}
    >
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

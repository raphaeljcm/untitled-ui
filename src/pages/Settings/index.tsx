import { Header } from '@/Header';
import { Tabs } from '@/Tabs';

const SETTINGS_TABS = [
  {
    value: 'my-details',
    title: 'My details',
  },
  {
    value: 'profile',
    title: 'Profile',
  },
  {
    value: 'password',
    title: 'Password',
  },
  {
    value: 'team',
    title: 'Team',
  },
  {
    value: 'plan',
    title: 'Plan',
  },
  {
    value: 'billing',
    title: 'Billing',
  },
  {
    value: 'email',
    title: 'Email',
  },
  {
    value: 'notifications',
    title: 'Notifications',
  },
  {
    value: 'integrations',
    title: 'Integrations',
  },
  {
    value: 'api',
    title: 'API',
  },
];

export default function Settings() {
  return (
    <>
      <Header title="Settings" />

      <Tabs tabs={SETTINGS_TABS} />
    </>
  );
}

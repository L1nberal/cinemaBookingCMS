import { AppShell, Burger, Group, Image } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import { TDefaultLayout } from './types';
import { Sidebar } from './components';
import ticketLogo from '../assets/ticket-logo.svg';

export const DefaultLayout = ({ children }: TDefaultLayout) => {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
      padding='md'
    >
      <AppShell.Header>
        <Group h='100%' px='sm'>
          <Burger
            opened={opened}
            onClick={toggle}
            hiddenFrom='sm'
            size='sm'
            title='asd'
          />
          <Image src={ticketLogo} alt='ticket-logo' style={{ width: '80px' }} />
        </Group>
      </AppShell.Header>

      <AppShell.Navbar style={{ width: '150px' }}>
        <Sidebar />
      </AppShell.Navbar>

      <AppShell.Main pl={170}>{children}</AppShell.Main>
    </AppShell>
  );
};

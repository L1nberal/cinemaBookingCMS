import { AppShell, Avatar, Burger, Group, Image } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import { TDefaultLayout } from './types';
import { Sidebar, UserMenu } from './components';
import ticketLogo from '../assets/ticket-logo.svg';
import defaultAvatar from '../assets/default-avatar.jpg';

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
        <Group h='100%' px='sm' justify='space-between'>
          <Burger
            opened={opened}
            onClick={toggle}
            hiddenFrom='sm'
            size='sm'
            title='asd'
          />
          <Image src={ticketLogo} alt='ticket-logo' style={{ width: '80px' }} />

          <UserMenu>
            <Avatar src={defaultAvatar} />
          </UserMenu>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar style={{ width: '150px' }}>
        <Sidebar />
      </AppShell.Navbar>

      <AppShell.Main pl={170}>{children}</AppShell.Main>
    </AppShell>
  );
};

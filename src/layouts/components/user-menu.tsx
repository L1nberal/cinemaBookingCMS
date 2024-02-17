import { Menu } from '@mantine/core';
import { ReactNode } from 'react';

import { LogoutIcon } from '../../components';

type TUserMenu = {
  children: ReactNode;
};

export const UserMenu = ({ children }: TUserMenu) => {
  return (
    <Menu width={200}>
      <Menu.Target>{children}</Menu.Target>

      <Menu.Dropdown>
        <Menu.Item leftSection={<LogoutIcon />}>Logout</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

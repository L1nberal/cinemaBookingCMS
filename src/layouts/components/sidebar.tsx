import { Tabs } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

import {
  CustomersIcon,
  GlassesIcon,
  MovieIcon,
  ScreenIcon,
} from '../../components';

export const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <Tabs
      defaultValue='gallery'
      orientation='vertical'
      onChange={(option) => navigate(option || 'screens')}
      variant='pills'
      color='indigo'
    >
      <Tabs.List style={{ width: '100%' }}>
        <Tabs.Tab
          className='!rounded-none'
          value='screens'
          leftSection={<GlassesIcon />}
        >
          Screens
        </Tabs.Tab>

        <Tabs.Tab
          className='!rounded-none'
          value='customers'
          leftSection={<CustomersIcon />}
        >
          Customers
        </Tabs.Tab>

        <Tabs.Tab
          className='!rounded-none'
          value='movies'
          leftSection={<MovieIcon />}
        >
          Movies
        </Tabs.Tab>

        <Tabs.Tab
          className='!rounded-none'
          value='statistics'
          leftSection={<ScreenIcon />}
        >
          Statistics
        </Tabs.Tab>
      </Tabs.List>
    </Tabs>
  );
};

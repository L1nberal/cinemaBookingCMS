import { useState } from 'react';
import { Tabs } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

import {
  CalendarIcon,
  CustomersIcon,
  GlassesIcon,
  MovieIcon,
  ScreenIcon,
  SettingIcon,
} from '../../components';

export const Sidebar = () => {
  const [activeTab, setActiveTab] = useState<string | null>('screens');
  const navigate = useNavigate();

  const handleChangeTab = (option: string | null) => {
    setActiveTab(option);
    navigate(option || 'screens');
  };

  return (
    <Tabs
      defaultValue='gallery'
      orientation='vertical'
      onChange={handleChangeTab}
      variant='pills'
      color='indigo'
      value={activeTab}
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
          value='calendar'
          leftSection={<CalendarIcon />}
        >
          Calendar
        </Tabs.Tab>

        <Tabs.Tab
          className='!rounded-none'
          value='statistics'
          leftSection={<ScreenIcon />}
        >
          Statistics
        </Tabs.Tab>

        <Tabs.Tab
          className='!rounded-none'
          value='settings'
          leftSection={<SettingIcon />}
        >
          Settings
        </Tabs.Tab>
      </Tabs.List>
    </Tabs>
  );
};

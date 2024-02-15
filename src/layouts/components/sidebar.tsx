import { Tabs } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

export const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <Tabs
      defaultValue='gallery'
      orientation='vertical'
      onChange={(option) => navigate(option || 'screens')}
    >
      <Tabs.List style={{ width: '100%' }}>
        <Tabs.Tab value='screens'>Screens</Tabs.Tab>
        <Tabs.Tab value='customers'>Customers</Tabs.Tab>
        <Tabs.Tab value='movies'>Movies</Tabs.Tab>
        <Tabs.Tab value='statistics'>Statistics</Tabs.Tab>
      </Tabs.List>
    </Tabs>
  );
};

import { AreaChart } from '@mantine/charts';

import { data } from './mockData';

export const Statistics = () => {
  return (
    <AreaChart
      h={350}
      w='100%'
      data={data}
      dataKey='date'
      series={[
        { name: 'Ordered', color: 'green' },
        { name: 'Canceled', color: 'red' },
        { name: 'Total', color: 'gray' },
      ]}
      curveType='linear'
    />
  );
};

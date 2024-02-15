import { AreaChart } from '@mantine/charts';

import { data } from './mockData';

const chartStyles = {
  tooltip: {
    backgroundColor: '#242424',
    color: 'white',
    width: 200,
    padding: 10,
    borderRadius: 5,
  },
  tooltipItem: { display: 'flex', justifyContent: 'space-between' },
  tooltipItemBody: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
  },
  tooltipBody: {
    marginTop: 10,
  },
};

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
      styles={chartStyles}
    />
  );
};

import { AreaChart } from '@mantine/charts';

import { data } from './mockData';
import Pagination from './pagination';
import { useEffect, useState } from 'react';

const itemsPerPage = 10; // Adjust as needed
const totalItems = 100; // Replace with your actual data count
const totalPages = Math.ceil(totalItems / itemsPerPage);

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
  const [currentPage, setCurrentPage] = useState(1);
  const [data2, setData2] = useState<{ id: number }[]>([]);

  useEffect(() => {
    const fetchData = async (page: number) => {
      const startIndex = (page - 1) * itemsPerPage;
      // Simulate fetching data from an API or local source
      const pageData = Array.from({ length: itemsPerPage }).map((_, i) => ({
        id: startIndex + i + 1,
        // ... other item data
      }));
      setData2(pageData);
    };

    fetchData(currentPage);
  }, [currentPage]);
  return (
    <>
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

      {data2.map((item) => (
        <div key={item.id}>{item.id}</div>
      ))}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </>
  );
};

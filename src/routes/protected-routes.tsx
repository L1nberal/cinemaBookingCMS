import { Navigate, Outlet } from 'react-router-dom';

import { Screens, Statistics } from '../features';
import { DefaultLayout } from '../layouts';

export const protectedRoutes = [
  {
    path: '/',
    element: (
      <DefaultLayout>
        <Outlet />
      </DefaultLayout>
    ),

    children: [
      {
        index: true,
        element: <Navigate to='/screens' />,
      },
      {
        path: '/screens',
        element: <Screens />,
      },
      {
        path: '/statistics',
        element: <Statistics />,
      },
    ],
  },
];

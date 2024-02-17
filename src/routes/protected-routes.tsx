import { Navigate } from 'react-router-dom';

import { Screens, Statistics } from '../features';
import { AppLayout } from '../layouts';
import { urls } from './urls';

export const protectedRoutes = [
  {
    path: urls.app,
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Navigate to={urls.screens} />,
      },
      {
        path: 'screens',
        element: <Screens />,
      },
      {
        path: 'statistics',
        element: <Statistics />,
      },
    ],
  },
];

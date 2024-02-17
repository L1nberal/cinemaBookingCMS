import { Navigate } from 'react-router-dom';

import { Screens, Statistics } from '../features';
import { AppLayout } from '../layouts';
import { urls } from './urls';
import { UnderContruction } from './components';

export const protectedRoutes = [
  {
    path: urls.app,
    element: <AppLayout />,
    errorElement: <div>error</div>,
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
        path: 'customers',
        element: <UnderContruction />,
      },
      {
        path: 'movies',
        element: <UnderContruction />,
      },
      {
        path: 'statistics',
        element: <Statistics />,
      },
    ],
  },
];

import { Navigate, Outlet } from 'react-router-dom';

import { Login, Signup } from '../features';

export const publicRoutes = [
  {
    path: '/',
    element: <Outlet />,
    children: [
      {
        index: true,
        element: <Navigate to='/login' />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <Signup />,
      },
    ],
  },
];

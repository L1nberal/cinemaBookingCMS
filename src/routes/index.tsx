import { useRoutes } from 'react-router-dom';

import { publicRoutes } from './public-routes';
import { protectedRoutes } from './protected-routes';
import { ErrorElement } from './components';

export const AppRoutes = () => {
  const routes = [
    ...publicRoutes,
    ...protectedRoutes,
    { path: '*', element: <ErrorElement /> },
  ];

  const element = useRoutes(routes);

  return <>{element}</>;
};

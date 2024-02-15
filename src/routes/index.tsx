import { useRoutes } from 'react-router-dom';

import { publicRoutes } from './public-routes';
import { protectedRoutes } from './protected-routes';

export const AppRoutes = () => {
  const routes = [...publicRoutes, ...protectedRoutes];

  const element = useRoutes(routes);

  return <>{element}</>;
};

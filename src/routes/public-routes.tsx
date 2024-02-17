import { AuthRoutes, Home } from './components';
import { urls } from './urls';

export const publicRoutes = [
  {
    path: urls.home,
    element: <Home />,
  },
  {
    path: urls.auth,
    element: <AuthRoutes />,
  },
];

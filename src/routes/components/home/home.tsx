import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { RootState } from '../../../state';
import { urls } from '../../urls';

export const Home = () => {
  const user = useSelector((state: RootState) => state.user.user);

  return <Navigate to={!user ? urls.auth : urls.app} />;
};

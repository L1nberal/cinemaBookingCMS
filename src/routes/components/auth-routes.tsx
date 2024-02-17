import { useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';

import { RootState } from '../../state';
import { urls } from '../urls';
import { Login, Signup } from '../../features';

export const AuthRoutes = () => {
  const user = useSelector((state: RootState) => state.user.user);

  return (
    <>
      {!user ? (
        <Routes>
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<Signup />} />
          <Route path='*' element={<Navigate to={urls.login} />} />
        </Routes>
      ) : (
        <Navigate to={urls.app} />
      )}
    </>
  );
};

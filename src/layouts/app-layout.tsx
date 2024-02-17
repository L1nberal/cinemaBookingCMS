import { Suspense } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { DefaultLayout } from './default-layout';
import { RootState } from '../state';
import { urls } from '../routes/urls';

export const AppLayout = () => {
  const user = useSelector((state: RootState) => state.user.user);

  return (
    <>
      {user ? (
        <DefaultLayout>
          <Suspense fallback={<p>Loading</p>}>
            <Outlet />
          </Suspense>
        </DefaultLayout>
      ) : (
        <Navigate to={urls.auth} />
      )}
    </>
  );
};

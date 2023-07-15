import type { FC } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { Footer } from '../components/footer/footer';
import { useAppSelector } from '../store/hooks';
import { getUserId } from '../store/slices/user/user.selectors';
import { Paths } from '../const/paths';
import { useGetMeMutation } from '../store/slices/api/user.api';
import { deleteCookie } from '../util/cookie';

export const ProtectedLayout: FC = () => {
  const [ getMe, { isLoading } ] = useGetMeMutation();
  const isAuth = useAppSelector(getUserId) !== null;

  if (!isAuth) {
    getMe(undefined)
      .unwrap()
      .catch((err) => {
        if (err.status !== 500) {
          deleteCookie('access');
        }
      });
  }

  return (
    <>
      {
        isAuth
          ? <>
              <Outlet/>
              <Footer footerType='anonymous' />
            </>
          : <Navigate to={Paths.MAIN} />
      }
    </>
  );
};
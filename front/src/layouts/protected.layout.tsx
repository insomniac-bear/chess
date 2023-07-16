import type { FC } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { Footer } from '../components/footer/footer';
import { useAppSelector } from '../store/hooks';
import { getUserId } from '../store/slices/user/user.selectors';
import { Paths } from '../const/paths';

export const ProtectedLayout: FC = () => {
  const isAuth = useAppSelector(getUserId) !== null;

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
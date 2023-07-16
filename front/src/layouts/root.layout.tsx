import type { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { getCookie } from '../util/cookie';
import store from '../store';
import { userApi } from '../store/slices/api/user.api';

export const RootLayout: FC = () => {
  return (
    <Outlet />
  );
}

export const loader = async (): Promise<Response | null> => {
  const access = getCookie('access');

  access !== null &&
  access !== undefined &&
  access !== '' &&
  await store
    .dispatch(
      userApi
        .endpoints
        .getMe
        .initiate(undefined)
    )
    .unwrap()
    .catch((err) => {
      console.log(err);
    })
  return null;
};

import { createBrowserRouter } from 'react-router-dom';
import { RootLayout } from '../layouts/root.layout';
import { Paths } from '../const/paths';
import { AnonymousLayout } from '../layouts/anonymous.layout';
import { ProtectedLayout } from '../layouts/protected.layout';
import { UIPage } from '../pages/ui-page/ui.page';
import { MainPage } from '../pages/main-page/main.page';
import { SignUpPage } from '../pages/sign-up-page/sing-up.page';

export const router = createBrowserRouter([
  {
    path: Paths.MAIN,
    element: <RootLayout />,
    children: [
      {
        path: Paths.MAIN,
        element: <AnonymousLayout />,
        children: [
          {
            path: Paths.MAIN,
            element: <MainPage />,
          },
          {
            path: Paths.SIGN_UP,
            element: <SignUpPage />,
          },
          {
            path: Paths.UI,
            element: <UIPage />,
          },
        ],
      },
      {
        path: Paths.LK,
        element: <ProtectedLayout />,
        children: [],
      },
    ],
  },
]);

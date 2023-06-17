import { createBrowserRouter } from 'react-router-dom';
import { RootLayout } from '../layouts/root.layout';
import { Paths } from '../const/paths';
import { AnonymousLayout } from '../layouts/anonymous.layout';
import { ProtectedLayout } from '../layouts/protected.layout';
import { UIPage } from '../pages/ui-page/ui.page';

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

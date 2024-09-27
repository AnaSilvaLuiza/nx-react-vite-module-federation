import { createBrowserRouter } from 'react-router-dom';
import App from '../app/app';
import TeamAdmin from './team-admin/team-admin';

const router = createBrowserRouter([
  {
    path: '',
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: 'team-admin',
        index: true,
        element: <TeamAdmin />,
      },
    ],
  },
]);

export default router;

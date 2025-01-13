import { lazy, Suspense } from 'react';
import { useRoutes } from 'react-router-dom';

import { AppRoutes } from 'routes/constants';

const Home = lazy(() => import('pages/home/HomePage'));
const Users = lazy(() => import('pages/users/UsersPage'));
const User = lazy(() => import('pages/user/UserPage'));

export const RoutesComponent = () =>
    useRoutes([
        {
            element: (
                <Suspense>
                    <Home />
                </Suspense>
            ),
            path: AppRoutes.root,
            index: true,
        },
        {
            element: (
                <Suspense>
                    <Users />
                </Suspense>
            ),
            path: AppRoutes.users,
        },
        {
            element: (
                <Suspense>
                    <User />
                </Suspense>
            ),
            path: AppRoutes.user,
        },
        { path: '*', element: <div>404 | Not Found</div> },
    ]);

import User from './pages/User';
import Admin from './pages/Admin';
import Auth from './pages/Auth';
import { ADMIN_ROUTE, USER_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE } from "./utils/consts";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: USER_ROUTE,
        Component: User
    }
]

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
]
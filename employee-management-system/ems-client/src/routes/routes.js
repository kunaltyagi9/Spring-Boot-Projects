import { lazy } from 'react';

const Main = lazy(() => import('../pages/Main'));
const Home = lazy(() => import('../pages/Home'));
const AddEmployee = lazy(() => import('../pages/AddEmployee'));
const AllEmployees = lazy(() => import('../pages/AllEmployees'));
const Dashboard = lazy(() => import('../pages/Dashboard'));

const routes = {
    main: {
        path: '/ems',
        element: Main
    },
    home: {
        path: 'home',
        element: Home
    },
    dashboard: {
        path: 'dashboard',
        element: Dashboard,
    },
    addemployee: {
        path: 'addemployee',
        element: AddEmployee
    },
    allemployees: {
        path: 'employees',
        element: AllEmployees
    },
    invalid: {
        path: '/ems/*',
        element: Main
    },
}

export { routes };
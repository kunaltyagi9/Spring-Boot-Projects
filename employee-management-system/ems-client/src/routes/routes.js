import { lazy } from 'react';

const Main = lazy(() => import('../pages/Main'));
const AddEmployee = lazy(() => import('../pages/AddEmployee'));
const AllEmployees = lazy(() => import('../pages/AllEmployees'));

const routes = {
    main: {
        path: '/ems',
        element: Main
    },
    addemployee: {
        path: 'addemployee',
        element: AddEmployee
    },
    allemployees: {
        path: 'allemployees',
        element: AllEmployees
    },
    invalid: {
        path: '/ems/*',
        element: Main
    },
}

export { routes };
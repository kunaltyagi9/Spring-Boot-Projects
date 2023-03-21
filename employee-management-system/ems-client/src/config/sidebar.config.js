
import { routes } from "../routes/routes"
import { PersonAdd, ViewStream } from '@mui/icons-material';

export const SIDEBAR_DATA = [
    {
        name: 'addemployee',
        title: 'Add Employee',
        icon: PersonAdd,
        path: routes.main.path
    },
    {
        name: 'allemployees',
        title: 'All Employees',
        icon: ViewStream,
        path: routes.main.path
    },
];
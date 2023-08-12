
import { routes } from "../routes/routes"
import { PersonAdd, ViewStream, HomeOutlined } from '@mui/icons-material';

export const SIDEBAR_DATA = [
    {
        name: 'home',
        title: 'Home',
        icon: HomeOutlined,
        activeIcon: '',
        path: routes.main.path,
        headerRow: true,
    },
    {
        name: 'addemployee',
        title: 'Add Employee',
        icon: PersonAdd,
        activeIcon: '',
        path: routes.main.path,
        headerRow: false,
    },
    {
        name: 'employees',
        title: 'Employees',
        icon: ViewStream,
        activeIcon: '',
        path: routes.main.path,
        headerRow: false,
    },
];
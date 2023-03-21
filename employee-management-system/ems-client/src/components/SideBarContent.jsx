

import { List, ListItem } from '@mui/material';
import { SIDEBAR_DATA } from '../config/sidebar.config';
import { NavLink, useParams } from 'react-router-dom';
import { routes } from '../routes/routes';

const SideBarContent = () => {

    const { type } = useParams();
    console.log(type);
    return (
        <List>
            {
                SIDEBAR_DATA.map(data => (
                    <NavLink 
                        key={data.name} 
                        to={`${routes.main.path}/${data.name}`}
                        style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                        <ListItem style={ type === data.name.toLowerCase() ? {
                            backgroundColor: '#d3e3fd',
                            borderRadius: '0 16px 16px 0'
                        } : {}}><data.icon fontSize="small" />{data.title}</ListItem>
                    </NavLink>
                ))
            }
        </List>
)
}

export default SideBarContent;
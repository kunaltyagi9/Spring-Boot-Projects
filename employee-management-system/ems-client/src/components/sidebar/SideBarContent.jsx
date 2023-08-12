

import { List, ListItem, Divider, styled } from '@mui/material';
import { SIDEBAR_DATA } from '../../config/sidebar.config';
import { NavLink, useParams } from 'react-router-dom';
import { routes } from '../../routes/routes';

const StyledDivider = styled(Divider)({
    width: '80%',
    color: '#FFF',
    backgroundColor: '#FFFFFF',
    margin: 12
})

const SideBarContent = () => {

    const { type } = useParams();
    console.log(type);
    return (
        <List>
            {
                SIDEBAR_DATA.map(data => {
                    return (
                        <>
                            <NavLink 
                                key={data.name} 
                                to={`${routes.main.path}/${data.name}`}
                                style={{ textDecoration: 'none', color: 'inherit' }}
                            >
                                <ListItem style={ type === data.name.toLowerCase() ? {
                                    backgroundColor: '#d3e3fd',
                                    borderRadius: '0 16px 16px 0',
                                } : { color: '#FFF' }}>
                                    <data.icon fontSize="small" style={{ marginRight: 5, color: '#FFF' }} />
                                    {data.title}
                                </ListItem>
                            </NavLink>
                            { data.headerRow && <StyledDivider light={true} />}
                        </>  
                    )
                })
            }
        </List>
)
}

export default SideBarContent;
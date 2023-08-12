

import { AppBar, Toolbar, Button, styled } from '@mui/material';
import { companyLogo } from '../../constants/constant';
import Search from './Search';

const StyledToolBar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between'
})

const Header = () => {

    return (
        <AppBar color="action">
            <StyledToolBar>
                <img src={companyLogo} alt="logo" style={{ width: 110 }} />
                <Search />
                <Button>Login</Button>
            </StyledToolBar>
        </AppBar>
    )
}

export default Header;
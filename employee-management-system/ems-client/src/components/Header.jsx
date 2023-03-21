

import { AppBar, Toolbar } from '@mui/material';
import { logo } from '../constants/constant';

const Header = () => {

    return (
        <AppBar color="action">
            <Toolbar>
                <img src={logo} alt="logo" style={{ width: 110 }} />
            </Toolbar>
        </AppBar>
    )
}

export default Header;
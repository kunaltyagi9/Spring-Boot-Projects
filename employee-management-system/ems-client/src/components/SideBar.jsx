

import { Drawer } from "@mui/material";
import SideBarContent from "./SideBarContent";

const SideBar = () => {

    return (
        <Drawer
            anchor={'true'}
            open={true}
            hideBackdrop={true}
            sx={{
                '& .MuiDrawer-paper': { 
                    width: '250px',
                    maxWidth: '250px',
                    boxShadow: '2px 0 0px 2px #F5F5F5',
                    height: 'calc(100vh - 64px)',
                    marginTop: '64px'
                },
            }}
        >
            <SideBarContent />
        </Drawer>
    )
}

export default SideBar;
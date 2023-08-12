
import { Drawer } from "@mui/material";
import SideBarContent from "./SideBarContent";

const SideBar = () => {

    return (
        <Drawer
            anchor={'left'}
            open={true}
            hideBackdrop={true}
            ModalProps={{
                keepMounted: true,
            }}
            variant="persistent"
            sx={{
                '& .MuiDrawer-paper': { 
                    width: '250px',
                    maxWidth: '250px',
                    height: 'calc(100vh - 64px)',
                    marginTop: '64px',
                    background: '#445A6F'
                },
            }}
        >
            <SideBarContent />
        </Drawer>
    )
}

export default SideBar;
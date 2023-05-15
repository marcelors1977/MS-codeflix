
import * as React from 'react';
import { MenuItem, Box, ListItemIcon, ListItemText, Menu, MuiThemeProvider } from '@material-ui/core'
import {  ArrowDropDown, ExitToApp } from '@material-ui/icons';
import useMenu from '../../hooks/useMenu';
import { menuTheme } from '../../../theme';
import UserInformation from '../../UserInformation';

export const MenuAccounts: React.FunctionComponent = () => {
    const {open, anchorEl, handleOpen, handleClose} = useMenu();
    
    return (
        <MuiThemeProvider theme={menuTheme}>
        <React.Fragment>
            <Box
                display="flex"
                alignItems={"center"}
                flexDirection={"row"}
                px={1}
                onClick={handleOpen}
                style={{ cursor: "pointer" }}
            >
             <UserInformation/>  
             <ArrowDropDown/>
            </Box>
            <Menu
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
                transformOrigin={{vertical: 'top', horizontal: 'center'}}
                getContentAnchorEl={null}
            >
                <MenuItem onClick={handleClose}>
                    <ListItemIcon style={{ color: "inherit" }}>
                        <ExitToApp/>
                    </ListItemIcon>
                    <ListItemText primary="Sair"/>
                </MenuItem>
            </Menu>
        </React.Fragment>
        </MuiThemeProvider>
    );
};

export default MenuAccounts;
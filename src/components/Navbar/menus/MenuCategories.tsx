
import * as React from 'react';
import { IconButton, Menu, MenuItem, MuiThemeProvider } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import routes, { MyRouteProps } from '../../../routes';
import { Link } from 'react-router-dom';
import useMenu from '../../hooks/useMenu';
import { menuTheme } from '../../../theme';

const listRoutes = [
    'home'
]
const menuRoutes = routes.filter((route: { name: string; }) => listRoutes.includes(route.name))

export const MenuCategories: React.FunctionComponent = () => {
    const {open, anchorEl, handleOpen, handleClose} = useMenu();

    return (
        <MuiThemeProvider theme={menuTheme}>
        <React.Fragment>
            <IconButton
                color="inherit"
                onClick={handleOpen}
            >
                <MenuIcon/>
            </IconButton>
            <Menu
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
                transformOrigin={{vertical: 'top', horizontal: 'center'}}
                getContentAnchorEl={null}
            >
                {
                    listRoutes.map(
                        (routeName, key) => {
                            const route = menuRoutes.find(
                                (route: { name: string; }) => route.name === routeName
                            ) as MyRouteProps
                            return (
                                <MenuItem key={key} component={Link} to={route.path as string} onClick={handleClose}>
                                    {route.label}
                                </MenuItem>
                            )

                        }
                    )
                }
                {
                    <MenuItem component={Link} to={`/categories/1`} onClick={handleClose}>
                        Categorias
                    </MenuItem>
                }
            </Menu>
        </React.Fragment>
        </MuiThemeProvider>
    );
    
};

export default MenuCategories;
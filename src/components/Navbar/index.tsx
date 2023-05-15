import { AppBar, Grid, IconButton, Toolbar, makeStyles } from "@material-ui/core";
import Title from "./Title";
import Notifications from "./Notifications";
import MenuCategories from "./menus/MenuCategories";
import MenuAccounts from "./menus/MenuAccounts";
import InputSearch from "../InputSearch";
import useIsSmallWindow from "../hooks/useIsSmallWindow";
import SearchIcon from "@material-ui/icons/Search";
import { useCallback, useContext } from "react";
import DialogSearchContext from "../DialogSearch/DialogSearchContext";
import HideOnScroll from "./HideOnScroll";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    }
}));

const Navbar: React.FunctionComponent = ()=> {
    const classes = useStyles();
    const isSmalWindow = useIsSmallWindow();
    const dialogContext = useContext(DialogSearchContext);
    const handleOpen = useCallback(() => {
        dialogContext.show();
    },[dialogContext]);

    return (
        <div className={classes.root}>
            <HideOnScroll>
                <AppBar position="fixed">
                    <Toolbar>
                        {!isSmalWindow && <MenuCategories/> }
                        <Title />
                        {!isSmalWindow && (
                            <>
                                <Grid container justifyContent="center">
                                    <Grid item xs={8} lg={7}>
                                        <InputSearch/>
                                    </Grid>
                                </Grid>
                                <Notifications />
                                <MenuAccounts/>
                            </>
                        )}
                        {isSmalWindow && (
                            <Grid container justifyContent="flex-end">
                                <IconButton onClick={handleOpen}>
                                    <SearchIcon/>
                                </IconButton>
                            </Grid>
                        )

                        }
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
        </div>
    );
};

export default Navbar;
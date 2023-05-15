import { AppBar, BottomNavigation, makeStyles } from "@material-ui/core";
import FooterItem from "./FooterItem";
import HomeIcons from "@material-ui/icons/Home";
import NotificationsIcon from "../Navbar/Notifications";
import PersonIcon from "@material-ui/icons/Person";
import { useCallback, useMemo, useState } from "react";
import DialogMyAccount from "../DialogMyAccount";
import { matchPath, useHistory, useLocation } from "react-router-dom";
import routes from "../../routes";
import FooterCategoriesItem from "./FooterCategories";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    appBar: {
        backgroundColor: theme.palette.background.default,
        bottom: 0,
        top: "auto",
        borderTop: `1px solid ${theme.palette.text.secondary}`,
        height: "48px",
    },
    bottomNavigation: {
        backgroundColor: "inherit",
    },
}));

const Footer: React.FunctionComponent = () => {
    const classes = useStyles();

    const [ openDialogAccount, setOpenDialogAccount ] = useState(false);
    const { push } = useHistory();
    const { pathname } = useLocation();

    const goToHome = useCallback(() => {
        push("/");
    },[push]);

    const currentRoute = useMemo(() =>
        routes.find((r) => matchPath(pathname,r))?.name
    ,[pathname]);

    const onClickMyAccountOpen = useCallback(() => {
        setOpenDialogAccount(true);
    }, []);

    const onClickMyAccountClose = useCallback(() => {
        setOpenDialogAccount(false);
    }, []);

    return (
        <div className={classes.root}>
            <AppBar 
                classes={{
                    root: classes.appBar
                }}
                position="fixed"
                color="primary"
            >
                <BottomNavigation className={classes.bottomNavigation} showLabels value={currentRoute}>
                    <FooterItem label="Início" value="home" icon={<HomeIcons />} onClick={goToHome}/>
                    <FooterCategoriesItem currentRoute={currentRoute} />
                    <FooterItem label="Notificações" icon={<NotificationsIcon />} />
                    <FooterItem label="Conta" icon={<PersonIcon />} onClick={onClickMyAccountOpen} />
                </BottomNavigation>
            </AppBar>
            <DialogMyAccount
                open={openDialogAccount}
                onClose={onClickMyAccountClose}
            />
        </div>
    );
}

export default Footer;
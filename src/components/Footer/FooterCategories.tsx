import MovieIcon from "@material-ui/icons/Movie";
import useMenu from "../hooks/useMenu";
import FooterItem, { FooterItemProps } from "./FooterItem";
import { MenuItem, MuiThemeProvider } from "@material-ui/core";
import MuiMenu from "@material-ui/core/Menu";
import { menuTheme } from "../../theme";
import { Link } from "react-router-dom";

interface FooterCategoriesItemProps extends FooterItemProps {
    currentRoute: string | undefined;
  }

const FooterCategoriesItem: React.FunctionComponent<FooterCategoriesItemProps> = (props) => {
    const { open, anchorEl, handleOpen, handleClose } = useMenu();
    const {currentRoute} = props;

    return (
        <>
            <FooterItem
                // {...props}
                label="Conteúdos"
                icon={<MovieIcon/>}
                onClick={handleOpen}
                selected={currentRoute === 'video.by-category'}
            />
            <MuiThemeProvider theme={menuTheme}>
                <MuiMenu
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{ vertical: "top", horizontal: "center" }}
                    transformOrigin={{ vertical: "bottom", horizontal: "center" }}
                    getContentAnchorEl={null}
                >
                    <MenuItem
                        component={Link}
                        to={(`/categories/filme-id`)}
                        onClick={handleClose}
                    >
                        Filmes
                    </MenuItem>
                    <MenuItem
                        component={Link}
                        to={`/categories/documentarios-id`}
                        onClick={handleClose}
                    >
                        Documentários
                    </MenuItem>
                </MuiMenu>
            </MuiThemeProvider>
        </>
    );
};

export default FooterCategoriesItem;
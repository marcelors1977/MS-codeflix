import { Theme, createTheme } from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import { PaletteOptions } from "@material-ui/core/styles/createPalette";

const palette: PaletteOptions = {
    primary: {
        main: red["500"]
    },
    background: {
        default: "#1f1f1f"
    },
    error: {
        main: red.A400
    },
    action: {
        active: "#ffffff"
    },
    text: {
        primary: "#ffffff",
        secondary: "#8c8c8d"
    }   
};

const theme = createTheme({
    palette,
    overrides: {
        MuiAppBar: {
            colorPrimary: {
                backgroundColor: palette.background?.default
            }
        },
        MuiDivider: {
            root: {
                backgroundColor: palette.text?.secondary
            }
        },
        MuiDialog: {
            paper: {
                background: palette.background?.default
            }
        },
        MuiCssBaseline: {
            "@global": {
                "html, body, #root, #root>div:nth-child(2)": {
                    height: "100%"
                },
                body: {
                    overflowX: "hidden"
                }
            }
        }
    }
});

export default theme;

const backgroundColor = "#3b3b3a";

export const menuTheme = ((theme: Theme): Theme => ({
    ...theme,
    overrides: {
        ...theme.overrides,
        MuiPaper: {
            root: {
                backgroundColor,
                padding: "0 10px",
                width: "300px"
            }
        },
        MuiMenuItem: {
            root: {
                borderBottom: "2px solid transparent",
                "&:hover": {
                    borderBottom: "2px solid #ffde39",
                    backgroundColor
                }
            }
        }
    }
}));

export const BANNER_VIDEO_ACTIONS_MEDIA_QUERY = 700;
export const MEDIA_QUERY_MOBILE = 600;
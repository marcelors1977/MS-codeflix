import { Typography, makeStyles } from "@material-ui/core";
import { MEDIA_QUERY_MOBILE } from "./theme";

const useStyles = makeStyles((theme) => ({
    root: {
        fontWeight: 600,
        fontSize: "1.4em",
        textTransform: "uppercase",
        borderBottom: `1px solid ${theme.palette.text.secondary}`,
        margin: theme.spacing(3, 3),
        color: theme.palette.text.secondary,

        [theme.breakpoints.down(MEDIA_QUERY_MOBILE)]: {
            margin: theme.spacing(2,1)
        }
    }
}));

const Title: React.FunctionComponent = (props) => {
    const classes = useStyles();
    return (
        <Typography className={classes.root} component="h2" >{
            props.children}
        </Typography>
    );
};

export default Title;

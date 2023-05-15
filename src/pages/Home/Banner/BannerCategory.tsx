import { makeStyles } from '@material-ui/core';
import * as React from 'react';
import Category, { CategoryProps } from '../../../components/Video/Category';
import { MEDIA_QUERY_MOBILE } from '../../../theme';



const useStyles = makeStyles ((theme) => ({
    root: {
        [theme.breakpoints.down(MEDIA_QUERY_MOBILE)] : {
            position: "absolute",
            bottom: 0,
            marginBottom: 4,
            left: 4,
            backgroundColor: 'rgba(0,0,0,0.5)',
        }
    },
    category: {
        fontSize: "1.4em",
        borderBottomWidth: "2px",

        [theme.breakpoints.down("sm")]: {
            fontSize: "0.8em",
        },

        [theme.breakpoints.up("lg")]: {
            fontSize: "1.6em",
        },
    }
}));


export interface BannerCategoryProps  extends CategoryProps{};

const BannerCategory: React.FunctionComponent<BannerCategoryProps> = (props) => {
    const classes = useStyles();
    return ( 
        <div className={ classes.root}>
            <Category {...props} className={classes.category}/>
        </div>
    )
};

export default BannerCategory;
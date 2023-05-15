import { BottomNavigation, BottomNavigationAction, makeStyles, useMediaQuery, useTheme } from '@material-ui/core';
import { AddCircleOutline, PlayCircleFilledOutlined } from '@material-ui/icons';
import InfoIcon from '@material-ui/icons/Info';
import * as React from 'react';
import { BANNER_VIDEO_ACTIONS_MEDIA_QUERY } from '../../../../theme';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "inherit"
    },
    navigationAcion: {
        color: theme.palette.text.primary
    }
}));

interface VideoActionMobileProps {};

const VideoActionsMobile: React.FunctionComponent<VideoActionMobileProps> = (props) => {
    const classes = useStyles();
    const theme = useTheme();
    const isDown700 = useMediaQuery(theme.breakpoints.down(BANNER_VIDEO_ACTIONS_MEDIA_QUERY));

    return isDown700 ? (
        <BottomNavigation className={classes.root} showLabels>
            <BottomNavigationAction className={classes.navigationAcion} label="Play" icon={<PlayCircleFilledOutlined/>}/>
            <BottomNavigationAction className={classes.navigationAcion} label="Minha lista" icon={<AddCircleOutline/>}/>
            <BottomNavigationAction className={classes.navigationAcion} label="Info" icon={<InfoIcon/>}/>
        </BottomNavigation>
    ) : null;
};

export default VideoActionsMobile;
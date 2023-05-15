
import * as React from 'react';
import VideoLink from '../../../../components/Video/VideoLink';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { AddCircleOutline, PlayCircleFilledOutlined } from '@material-ui/icons';
import InfoIcon from '@material-ui/icons/Info';

const useStyles = makeStyles ((theme) => ({
    root: {
        display: "flex",
        fontSize: "1em",
        fontWeight: 300,
        alignItems: "center",
        justifyContent: "flex-start",
    }
}));

interface VideoActionsProps {};

const VideoActions: React.FunctionComponent<VideoActionsProps> = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <VideoLink>
                <PlayCircleFilledOutlined/>
                Play
            </VideoLink>
            <VideoLink>
                <AddCircleOutline/>
                Minha lista
            </VideoLink>
            <VideoLink>
                <InfoIcon/>
                Info
                </VideoLink>            
        </div>
    );
};

export default VideoActions;
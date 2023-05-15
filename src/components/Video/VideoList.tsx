import * as React from 'react';
import { Video } from '../../util/modes';
import VideoThumbnail from './VideoThumbnail';
import { Grid, makeStyles, useMediaQuery, useTheme } from '@material-ui/core';
import { Link } from 'react-router-dom';
import banner from "../../static/img/1-vid-banner-01.jpg";
import bannerThumb from "../../static/img/1-vid-thumb-01.jpg";

const useStyles = makeStyles((theme) => ({
    root: {
        gridColumnGap: theme.spacing(1)
    }
}));

interface VideoListProps {
  videos: Video[]
}

const VideoList: React.FunctionComponent<VideoListProps> = props => {
  const { videos } = props;
  const theme = useTheme();
  const isDown1200 = useMediaQuery(theme.breakpoints.down(1200));
  const thumbnail = isDown1200 ? bannerThumb : banner;
  const classes = useStyles();

  return (
    <Grid className={classes.root} container justifyContent='center'>
      {Array.from(new Array(6).keys())
        .map(() => thumbnail)
        .map((v, index) => {
          return (
            <Link to={`/videos/1/details`} key={index}>
              <VideoThumbnail
                key={v}
                // classes={{ root: classes.videoThumbnailRoot }}
                ImgProps={{ src: thumbnail }}
              />
            </Link>
          );
        })}
    </Grid>
  )
}

export default VideoList



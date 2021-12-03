import React from 'react';
import Video from 'react-native-video';
import styles from './style';

const {container} = styles;

const VideoView = ({uri, paused}) => {
  return (
    <Video
      style={container}
      source={{uri}}
      playWhenInactive={false}
      playInBackground={false}
      resizeMode="contain"
      paused={paused}
    />
  );
};

export default React.memo(VideoView);

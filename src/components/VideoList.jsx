import React from 'react';
import VideoItem from './VideoItem';

const VideoList = (props) => {

  return (
    <div className="ui items">
      {props.videos.map(m => <VideoItem video={m} key={m.id.videoId} />)}
    </div>
  );
}

export default VideoList;
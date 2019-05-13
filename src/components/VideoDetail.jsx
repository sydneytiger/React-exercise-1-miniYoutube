import React from 'react';

const VideoDetail = ({ video }) => {
  if (video && video.snippet) {
    return <div>{video.snippet.title}</div>
  }
  else {
    return <div>loading...</div>
  }

};

export default VideoDetail;
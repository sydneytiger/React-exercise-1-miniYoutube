import React from 'react';

const VideoList = (props) => {

  return (
    <ul>
      {props.videos.map(m => <li key={m.id.videoId}>{m.snippet.title}</li>)}
    </ul>
  );
}

export default VideoList;
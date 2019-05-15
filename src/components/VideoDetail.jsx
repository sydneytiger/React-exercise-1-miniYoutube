import React from 'react';

const VideoDetail = ({ video }) => {
  if (video && video.snippet) {
    return (
    <React.Fragment>
      <div className="ui embed">
        <iframe 
        src={`https://www.youtube.com/embed/${video.id.videoId}`} 
        title={video.snippet.title}/>
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </React.Fragment>
    )
  }
  else {
    return <div>loading...</div>
  }

};

export default VideoDetail;
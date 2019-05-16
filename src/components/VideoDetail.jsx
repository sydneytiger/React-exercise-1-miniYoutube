import React from 'react';
import { connect } from 'react-redux';

const VideoDetail = ({ video }) => {
  if (video && video.snippet) {
    return (
      <React.Fragment>
        <div className="ui embed">
          <iframe
            src={`https://www.youtube.com/embed/${video.id.videoId}`}
            title={video.snippet.title} />
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

const mapStateToProps = state => {
  return {
    video: state.selectedVideo
  }
};

export default connect(mapStateToProps)(VideoDetail);
import React from 'react';
import { connect } from 'react-redux';
import loading from './images/loading.svg';

const VideoDetail = ({ video }) => {
  if (video && video.snippet) {
    return (
      <React.Fragment>
        <div className="ui embed">
          <iframe
            src={`https://www.youtube.com/embed/${video.id.videoId}`}
            title={video.snippet.title}  allowFullScreen/>
        </div>
        <div className="ui segment">
          <h4 className="ui header">{video.snippet.title}</h4>
          <p>{video.snippet.description}</p>
        </div>
      </React.Fragment>
    )
  }
  else {
    return <div className="loading">
      <img src={loading} alt="loading" />
    </div>
  }

};

const mapStateToProps = state => {
  return {
    video: state.selectedVideo
  }
};

export default connect(mapStateToProps)(VideoDetail);
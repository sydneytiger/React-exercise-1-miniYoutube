import React from 'react';
import { connect } from 'react-redux';
import Loader from './Loader';
import ErrorBanner from './ErrorBanner';

const VideoDetail = ({ video, error }) => {
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
  else if (error) {
  return <ErrorBanner></ErrorBanner>
  }
  else {
    return <Loader isFullScreen></Loader>
  }

};

const mapStateToProps = state => {
  return {
    video: state.selectedVideo,
    error: state.error
  }
};

export default connect(mapStateToProps)(VideoDetail);

import React from 'react';
import { connect } from 'react-redux';
import { searchVideos } from './actions';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';
import store from './store';

class App extends React.Component {
  componentDidMount = () => {
    this.props.searchVideos('reactjs');
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onSearchSubmit={this.props.searchVideos} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.props.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList videos={this.props.searchResult} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    selectedVideo: state.selectedVideo,
    searchResult: state.searchResult
  }
};

const mapDispatchToProps = dispatch => {
  return {
    searchVideos: keyword => dispatch(searchVideos(keyword))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
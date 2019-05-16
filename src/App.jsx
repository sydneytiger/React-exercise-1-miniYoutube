import React from 'react';
import { connect } from 'react-redux';
import { addVideos, selectVideo } from './actions';
import SearchBar from './components/SearchBar';
import youtube from './apis/youtube';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      searchResult: [],
      selectedVideo: null
    };
  }

  componentDidMount = () => {
    this.searchSubmitHandler('reactjs');
  };

  searchSubmitHandler = async (keyword) => {
    const response = await youtube.get('/search', {
      params: { q: keyword }
    });

    const result = response.data.items.filter(f => f.id.videoId);
    this.props.addVideos(result);
    this.props.selectVideo(result[0]);
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onSearchSubmit={this.searchSubmitHandler} />
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
    addVideos: videos => dispatch(addVideos(videos)),
    selectVideo: video => dispatch(selectVideo(video))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
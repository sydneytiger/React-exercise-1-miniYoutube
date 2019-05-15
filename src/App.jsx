import React from 'react';
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

    this.setState({ 
      searchResult: response.data.items.filter(f => f.id.videoId),
      selectedVideo: response.data.items[0]
    });
  }

  onVideoSelected = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onSearchSubmit={this.searchSubmitHandler} />
        <div className="ui grid">
          <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={this.state.selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList videos={this.state.searchResult} onVideoSelected={this.onVideoSelected} />
          </div>
          </div>
        </div>
      </div>
    );
  }

}

export default App;
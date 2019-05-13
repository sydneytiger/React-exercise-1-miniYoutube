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

  searchSubmitHandler = async (keyword) => {
    const response = await youtube.get('/search', {
      params: { q: keyword }
    });

    this.setState({ searchResult: response.data.items.filter(f => f.id.videoId) });
  }

  onVideoSelected = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onSearchSubmit={this.searchSubmitHandler} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList videos={this.state.searchResult} onVideoSelected={this.onVideoSelected} />
      </div>
    );
  }

}

export default App;
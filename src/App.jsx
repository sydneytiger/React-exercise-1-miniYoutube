import React from 'react';
import SearchBar from './components/SearchBar';
import youtube from './apis/youtube';
import VideoList from './components/VideoList';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      keyword: null,
      searchResult: []
    };
  }

  searchSubmitHandler = async (keyword) => {
    const response = await youtube.get('/search', {
      params: { q: keyword }
    });

    this.setState({ searchResult: response.data.items });
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onSearchSubmit={this.searchSubmitHandler} />
        <VideoList videos={this.state.searchResult} />
      </div>
    );
  }

}

export default App;
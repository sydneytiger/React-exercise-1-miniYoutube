import React from 'react';
import SearchBar from './components/SearchBar';

class App extends React.Component {
  constructor() {
    super();

    this.state = { keyword: null };
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar />
      </div>
    );
  }

}

export default App;
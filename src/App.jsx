import React from 'react';

class App extends React.Component {
  constructor() {
    super();

    this.state = { keyword: null };
  }

  render() {
    return (
      <div className="ui container">my mini youtube</div>
    );
  }

}

export default App;
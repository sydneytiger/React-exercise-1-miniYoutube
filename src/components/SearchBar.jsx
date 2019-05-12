import React from 'react';

class SearchBar extends React.Component {
  state = { keyword: '' };

  onSearchSubmit = (e) => {
    e.preventDefault();
    console.log(`searching keyword ${this.state.keyword}`);
  }

  render() {
    return (
      <form action="submit" onSubmit={this.onSearchSubmit} className="ui form">
        <div className="ui large fluid icon input">
          <input
            type="text"
            value={this.state.keyword}
            placeholder="Search..."
            onChange={(e) => this.setState({ keyword: e.target.value })}
          />
          <i className="search icon"></i>
        </div>
      </form>
    );
  }
}

export default SearchBar;
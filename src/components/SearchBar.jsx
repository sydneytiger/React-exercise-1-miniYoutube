import React from 'react';

class SearchBar extends React.Component {
  state = { keyword: '' };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onSearchSubmit(this.state.keyword);
  }

  render() {
    return (
      <div className="ui segment">
        <form action="submit" onSubmit={this.onSubmit} className="ui form">
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
      </div>)
  }
}

export default SearchBar;
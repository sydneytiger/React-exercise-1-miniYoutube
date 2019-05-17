import React from 'react';
import store from '../store';
import { updateKeyword } from '../actions';

class SearchBar extends React.Component {
  inputRef = React.createRef();

  componentDidMount() {
    this.inputRef.current.focus();
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onSearchSubmit(this.inputRef.current.value);
    store.dispatch(updateKeyword(this.inputRef.current.value))
  };

  render() {
    return (
      <div className="ui segment">
        <form action="submit" onSubmit={this.onSubmit} className="ui form">
          <div className="ui large fluid icon input">
            <input
              ref={this.inputRef}
              type="text"
              placeholder="Search..."
            />
            <i className="search icon"></i>
          </div>
        </form>
      </div>)
  }
};


export default SearchBar;
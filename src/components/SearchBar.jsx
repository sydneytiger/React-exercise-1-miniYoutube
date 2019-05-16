import React from 'react';
import { connect } from 'react-redux';
import store from '../store';
import { updateKeyword } from '../actions';

class SearchBar extends React.Component {
  inputRef = React.createRef();

  componentDidMount() {
    this.inputRef.current.focus();
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onSearchSubmit(this.props.keyword);
  };

  render() {
    return (
      <div className="ui segment">
        <form action="submit" onSubmit={this.onSubmit} className="ui form">
          <div className="ui large fluid icon input">
            <input
              ref={this.inputRef}
              type="text"
              value={this.props.keyword}
              placeholder="Search..."
              onChange={(e) => { store.dispatch(updateKeyword(e.target.value)) }}
            />
            <i className="search icon"></i>
          </div>
        </form>
      </div>)
  }
};

const mapStateToProps = (state) => {
  return {
    keyword: state.keyword
  }
};

export default connect(mapStateToProps)(SearchBar);
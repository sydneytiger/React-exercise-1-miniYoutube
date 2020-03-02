import React from 'react';
import { connect } from 'react-redux';

const ErrorBanner = ({info}) => {
  return ( 
    <ul>
      <li>{info}</li>
    </ul>
  );
}

const mapStateToProps = state => {
  return {
    info: state.error
  }
}
 
export default connect(mapStateToProps)(ErrorBanner);

import React from 'react';

const Loader = ({isFullScreen}) => {

  if (isFullScreen) {
    return (
        <div className="loading">Loading&#8230;</div>
    );
  } else {
    return <div>Testing</div>
  }
}
 
export default Loader;
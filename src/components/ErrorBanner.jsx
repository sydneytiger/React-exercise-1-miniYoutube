import React from 'react';
import { Message } from 'semantic-ui-react';

const ErrorBanner = () => {
  return ( 
    <Message negative>
      <Message.Header>We're sorry! we fail to get youtube data</Message.Header>
      <p>Daily limit reached! Please try again tomorrow.</p>
    </Message>
  );
}


 
export default ErrorBanner;

/**
*
* Copyright
*
*/

import React, { PureComponent } from 'react';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

class Copyright extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <FormattedMessage {...messages.text} />
      </div>
    );
  }
}

export default Copyright;

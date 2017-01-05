/*
 *
 * Homepage view
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
// Components
import AppBar from 'components/AppBar';
import AutoComplete from 'components/AutoComplete';

export default function render() {
  return (
    <div style={{ textAlign: 'center' }}>
      <Helmet
        title="Homepage"
        meta={[
          { name: 'description', content: 'Description of Homepage' },
        ]}
      />
      <FormattedMessage {...messages.header} />

      <h1>AppBar</h1>
      <AppBar
        title="Title"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
      />

      <h1>AutoComplete</h1>
      <AutoComplete
        hintText="Type anything"
        dataSource={[]}
      />
    </div>
  );
}

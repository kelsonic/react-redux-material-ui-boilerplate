/*
 *
 * Homepage view
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
// Extra material-ui components (don't necessitate wrappers)
import FileFolder from 'material-ui/svg-icons/file/folder';
// Components
import AppBar from 'components/AppBar';
import AutoComplete from 'components/AutoComplete';
import Avatar from 'components/Avatar';

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

      <h1>Avatar</h1>
      <Avatar
        icon={<FileFolder />}
        color={'#999'}
        backgroundColor={'#e9e9e9'}
        size={30}
      />
    </div>
  );
}

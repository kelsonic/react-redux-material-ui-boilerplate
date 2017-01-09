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
// Material-UI wrapper components
import AppBar from 'components/AppBar';
import AutoComplete from 'components/AutoComplete';
import Avatar from 'components/Avatar';
import Badge from 'components/Badge';
// Other Components
import A from 'components/A';
import H1 from 'components/H1';

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

      <A href="http://material-ui.com"><H1>AppBar</H1></A>
      <AppBar
        title="Title"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
      />

      <A href="http://material-ui.com"><H1>AutoComplete</H1></A>
      <AutoComplete
        hintText="Type anything"
        dataSource={[]}
      />

      <A href="http://material-ui.com"><H1>Avatar</H1></A>
      <Avatar
        icon={<FileFolder />}
        color={'#999'}
        backgroundColor={'#e9e9e9'}
        size={30}
      />

      <A href="http://material-ui.com"><H1>Badge</H1></A>
      <Badge
        badgeContent="&copy;"
        badgeStyle={{ fontSize: 20 }}
      >
        Company Name
      </Badge>

      <A href="http://material-ui.com"><H1>BottomNavigation (TODO: example)</H1></A>
    </div>
  );
}

/**
*
* BottomNavigationItem view
*
*/

import React from 'react';
import { BottomNavigationItem } from 'material-ui/BottomNavigation';

export default function render() {
  return (
    <BottomNavigationItem
      label={this.props.label}
      icon={this.props.icon}
      onTouchTap={this.props.onTouchTap}
    />
  );
}

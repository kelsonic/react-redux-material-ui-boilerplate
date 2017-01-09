/**
*
* BottomNavigation view
*
*/

import React from 'react';
import { BottomNavigation } from 'material-ui/BottomNavigation';

export default function render() {
  return (
    <BottomNavigation
      selectedIndex={this.props.selectedIndex}
    >
      {this.props.children}
    </BottomNavigation>
  );
}

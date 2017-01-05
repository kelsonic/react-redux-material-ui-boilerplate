/**
*
* AppBar view
*
*/

import React from 'react';
import AppBar from 'material-ui/AppBar';

export default function render() {
  return (
    <AppBar
      className={this.props.className}
      iconClassNameLeft={this.props.iconClassNameLeft}
      iconClassNameRight={this.props.iconClassNameRight}
      iconElementLeft={this.props.iconElementLeft}
      iconElementRight={this.props.iconElementRight}
      iconStyleLeft={this.props.iconStyleLeft}
      iconStyleRight={this.props.iconStyleRight}
      onLeftIconButtonTouchTap={this.props.onLeftIconButtonTouchTap}
      onRightIconButtonTouchTap={this.props.onRightIconButtonTouchTap}
      onTitleTouchTap={this.props.onTitleTouchTap}
      showMenuIconButton={this.props.showMenuIconButton}
      style={this.props.style}
      title={this.props.title}
      titleStyle={this.props.titleStyle}
      zDepth={this.props.zDepth}
    >
      {this.props.children}
    </AppBar>
  );
}

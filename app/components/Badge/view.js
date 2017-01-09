/**
*
* Badge view
*
*/

import React from 'react';
import Badge from 'material-ui/Badge';

export default function render() {
  return (
    <Badge
      badgeContent={this.props.badgeContent}
      badgeStyle={this.props.badgeStyle}
      className={this.props.className}
      primary={this.props.primary}
      secondary={this.props.secondary}
      style={this.props.style}
    >
      {this.props.children}
    </Badge>
  );
}

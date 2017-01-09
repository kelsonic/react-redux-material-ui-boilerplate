/**
*
* CardMedia view
*
*/

import React from 'react';
import { CardMedia } from 'material-ui/Card';

export default function render() {
  return (
    <CardMedia
      actAsExpander={this.props.actAsExpander}
      expandable={this.props.expandable}
      mediaStyle={this.props.mediaStyle}
      overlay={this.props.overlay}
      overlayContainerStyle={this.props.overlayContainerStyle}
      overlayContentStyle={this.props.overlayContentStyle}
      overlayStyle={this.props.overlayStyle}
      style={this.props.style}
    >
      {this.props.children}
    </CardMedia>
  );
}

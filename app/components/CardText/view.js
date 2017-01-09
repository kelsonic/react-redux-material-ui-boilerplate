/**
*
* CardText view
*
*/

import React from 'react';
import { CardText } from 'material-ui/Card';

export default function render() {
  return (
    <CardText
      actAsExpander={this.props.actAsExpander}
      color={this.props.color}
      expandable={this.props.expandable}
      style={this.props.style}
    >
      {this.props.children}
    </CardText>
  );
}

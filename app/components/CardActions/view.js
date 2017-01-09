/**
*
* CardActions view
*
*/

import React from 'react';
import { CardActions } from 'material-ui/Card';

export default function render() {
  return (
    <CardActions
      actAsExpander={this.props.actAsExpander}
      expandable={this.props.expandable}
      showExpandableButton={this.props.showExpandableButton}
      style={this.props.style}
    >
      {this.props.children}
    </CardActions>
  );
}

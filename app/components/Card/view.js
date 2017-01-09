/**
*
* Card view
*
*/

import React from 'react';
import { Card } from 'material-ui/Card';

export default function render() {
  return (
    <Card
      containerStyle={this.props.containerStyle}
      expandable={this.props.expandable}
      expanded={this.props.expanded}
      initiallyExpanded={this.props.initiallyExpanded}
      onExpandChange={this.props.onExpandChange}
      showExpandableButton={this.props.showExpandableButton}
      style={this.props.style}
    >
      {this.props.children}
    </Card>
  );
}

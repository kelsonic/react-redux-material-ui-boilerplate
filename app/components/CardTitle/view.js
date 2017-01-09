/**
*
* CardTitle view
*
*/

import React from 'react';
import { CardTitle } from 'material-ui/Card';

export default function render() {
  return (
    <CardTitle
      actAsExpander={this.props.actAsExpander}
      expandable={this.props.expandable}
      showExpandableButton={this.props.showExpandableButton}
      style={this.props.style}
      subtitle={this.props.subtitle}
      subtitleColor={this.props.subtitleColor}
      subtitleStyle={this.props.subtitleStyle}
      title={this.props.title}
      titleColor={this.props.titleColor}
      titleStyle={this.props.titleStyle}
    >
      {this.props.children}
    </CardTitle>
  );
}

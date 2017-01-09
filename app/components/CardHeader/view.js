/**
*
* CardHeader view
*
*/

import React from 'react';
import { CardHeader } from 'material-ui/Card';

export default function render() {
  return (
    <CardHeader
      actAsExpander={this.props.actAsExpander}
      avatar={this.props.avatar}
      closeIcon={this.props.closeIcon}
      expandable={this.props.expandable}
      openIcon={this.props.openIcon}
      showExpandableButton={this.props.showExpandableButton}
      style={this.props.style}
      subtitle={this.props.subtitle}
      subtitleColor={this.props.subtitleColor}
      subtitleStyle={this.props.subtitleStyle}
      textStyle={this.props.textStyle}
      title={this.props.title}
      titleColor={this.props.titleColor}
      titleStyle={this.props.titleStyle}
    >
    </CardHeader>
  );
}

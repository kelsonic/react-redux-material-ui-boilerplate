/**
*
* Avatar view
*
*/

import React from 'react';
import Avatar from 'material-ui/Avatar';

export default function render() {
  return (
    <Avatar
      backgroundColor={this.props.backgroundColor}
      className={this.props.className}
      color={this.props.color}
      icon={this.props.icon}
      size={this.props.size}
      src={this.props.src}
      style={this.props.style}
    >
      {this.props.children}
    </Avatar>
  );
}

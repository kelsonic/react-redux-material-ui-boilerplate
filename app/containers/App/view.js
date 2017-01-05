import React, { Children } from 'react';

export default function render() {
  return (
    <div>
      {Children.toArray(this.props.children)}
    </div>
  );
}

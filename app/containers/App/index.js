/**
 *
 * App.react.js
 *
 */

import { PureComponent, PropTypes } from 'react';
import view from './view';

export default class App extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
  };
}

App.prototype.render = view;

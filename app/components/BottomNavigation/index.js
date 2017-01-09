/**
*
* BottomNavigation
*
*/

import { PropTypes, PureComponent } from 'react';
import view from './view';

class BottomNavigation extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    selectedIndex: PropTypes.number,
  };

  static defaultProps = {
    children: undefined,
    selectedIndex: undefined,
  };
}

BottomNavigation.prototype.render = view;

export default BottomNavigation;

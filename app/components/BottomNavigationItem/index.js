/**
*
* BottomNavigationItem
*
*/

import { PropTypes, PureComponent } from 'react';
import view from './view';

class BottomNavigationItem extends PureComponent {
  static propTypes = {
    label: PropTypes.string,
    icon: PropTypes.node,
    onTouchTap: PropTypes.func,
  };

  static defaultProps = {
    label: undefined,
    icon: undefined,
    onTouchTap: () => {},
  };
}

BottomNavigationItem.prototype.render = view;

export default BottomNavigationItem;

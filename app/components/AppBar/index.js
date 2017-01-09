/**
*
* AppBar
*
*/

import { PropTypes, PureComponent } from 'react';
import view from './view';

class AppBar extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    iconClassNameLeft: PropTypes.string,
    iconClassNameRight: PropTypes.string,
    iconElementLeft: PropTypes.node,
    iconElementRight: PropTypes.node,
    iconStyleLeft: PropTypes.object,
    iconStyleRight: PropTypes.object,
    onLeftIconButtonTouchTap: PropTypes.func,
    onRightIconButtonTouchTap: PropTypes.func,
    onTitleTouchTap: PropTypes.func,
    showMenuIconButton: PropTypes.bool,
    style: PropTypes.object,
    title: PropTypes.node,
    titleStyle: PropTypes.object,
    zDepth: PropTypes.number,
  };

  static defaultProps = {
    children: undefined,
    className: undefined,
    iconClassNameLeft: undefined,
    iconClassNameRight: undefined,
    iconElementLeft: undefined,
    iconElementRight: undefined,
    iconStyleLeft: undefined,
    iconStyleRight: undefined,
    onLeftIconButtonTouchTap: () => {},
    onRightIconButtonTouchTap: () => {},
    onTitleTouchTap: () => {},
    showMenuIconButton: true,
    style: undefined,
    title: '',
    titleStyle: undefined,
    zDepth: 1,
  };
}

AppBar.prototype.render = view;

export default AppBar;

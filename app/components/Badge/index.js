/**
*
* Badge
*
*/

import { PropTypes, PureComponent } from 'react';
import view from './view';

class Badge extends PureComponent {
  static propTypes = {
    badgeContent: PropTypes.node,
    badgeStyle: PropTypes.object,
    children: PropTypes.node,
    className: PropTypes.string,
    primary: PropTypes.bool,
    secondary: PropTypes.bool,
    style: PropTypes.object,
  };

  static defaultProps = {
    badgeContent: undefined,
    badgeStyle: undefined,
    children: undefined,
    className: undefined,
    primary: false,
    secondary: false,
    style: undefined,
  };
}

Badge.prototype.render = view;

export default Badge;

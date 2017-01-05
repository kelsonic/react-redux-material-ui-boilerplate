/**
*
* Avatar
*
*/

import { PropTypes, PureComponent } from 'react';
import view from './view';

class Avatar extends PureComponent {
  static propTypes = {
    backgroundColor: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string,
    color: PropTypes.string,
    icon: PropTypes.node,
    size: PropTypes.number,
    src: PropTypes.string,
    style: PropTypes.object,
  };

  static defaultProps = {
    backgroundColor: undefined,
    children: undefined,
    className: undefined,
    color: undefined,
    icon: undefined,
    size: 40,
    src: undefined,
    style: undefined,
  };
}

Avatar.prototype.render = view;

export default Avatar;

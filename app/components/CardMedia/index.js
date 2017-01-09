/**
*
* CardMedia
*
*/

import { PropTypes, PureComponent } from 'react';
import view from './view';

class CardMedia extends PureComponent {
  static propTypes = {
    actAsExpander: PropTypes.bool,
    children: PropTypes.node,
    expandable: PropTypes.bool,
    mediaStyle: PropTypes.object,
    overlay: PropTypes.node,
    overlayContainerStyle: PropTypes.object,
    overlayContentStyle: PropTypes.object,
    overlayStyle: PropTypes.object,
    style: PropTypes.object,
  };

  static defaultProps = {
    actAsExpander: undefined,
    children: undefined,
    expandable: undefined,
    mediaStyle: undefined,
    overlay: undefined,
    overlayContainerStyle: undefined,
    overlayContentStyle: undefined,
    overlayStyle: undefined,
    style: undefined,
  };
}

CardMedia.prototype.render = view;

export default CardMedia;

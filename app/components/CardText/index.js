/**
*
* CardText
*
*/

import { PropTypes, PureComponent } from 'react';
import view from './view';

class CardText extends PureComponent {
  static propTypes = {
    actAsExpander: PropTypes.bool,
    children: PropTypes.node,
    color: PropTypes.string,
    expandable: PropTypes.bool,
    style: PropTypes.object,
  };

  static defaultProps = {
    actAsExpander: undefined,
    children: undefined,
    color: undefined,
    expandable: undefined,
    style: undefined,
  };
}

CardText.prototype.render = view;

export default CardText;

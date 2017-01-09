/**
*
* CardActions
*
*/

import { PropTypes, PureComponent } from 'react';
import view from './view';

class CardActions extends PureComponent {
  static propTypes = {
    actAsExpander: PropTypes.bool,
    children: PropTypes.node,
    expandable: PropTypes.bool,
    showExpandableButton: PropTypes.bool,
    style: PropTypes.object,
  };

  static defaultProps = {
    actAsExpander: undefined,
    children: undefined,
    expandable: undefined,
    showExpandableButton: undefined,
    style: undefined,
  };
}

CardActions.prototype.render = view;

export default CardActions;

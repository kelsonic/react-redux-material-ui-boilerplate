/**
*
* Card
*
*/

import { PropTypes, PureComponent } from 'react';
import view from './view';

class Card extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    containerStyle: PropTypes.object,
    expandable: PropTypes.bool,
    expanded: PropTypes.bool,
    initiallyExpanded: PropTypes.bool,
    onExpandChange: PropTypes.function,
    showExpandableButton: PropTypes.bool,
    style: PropTypes.object,
  };

  static defaultProps = {
    children: undefined,
    containerStyle: undefined,
    expandable: false,
    expanded: null,
    initiallyExpanded: false,
    onExpandChange: undefined,
    showExpandableButton: undefined,
    style: undefined,
  };
}

Card.prototype.render = view;

export default Card;

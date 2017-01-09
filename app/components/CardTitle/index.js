/**
*
* CardTitle
*
*/

import { PropTypes, PureComponent } from 'react';
import view from './view';

class CardTitle extends PureComponent {
  static propTypes = {
    actAsExpander: PropTypes.bool,
    children: PropTypes.node,
    expandable: PropTypes.bool,
    showExpandableButton: PropTypes.bool,
    style: PropTypes.object,
    subtitle: PropTypes.node,
    subtitleColor: PropTypes.string,
    subtitleStyle: PropTypes.object,
    title: PropTypes.node,
    titleColor: PropTypes.string,
    titleStyle: PropTypes.object,
  };

  static defaultProps = {
    actAsExpander: undefined,
    children: undefined,
    expandable: undefined,
    showExpandableButton: undefined,
    style: undefined,
    subtitle: undefined,
    subtitleColor: undefined,
    subtitleStyle: undefined,
    title: undefined,
    titleColor: undefined,
    titleStyle: undefined,
  };
}

CardTitle.prototype.render = view;

export default CardTitle;

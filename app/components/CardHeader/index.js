/**
*
* CardHeader
*
*/

import { PropTypes, PureComponent } from 'react';
import view from './view';

class CardHeader extends PureComponent {
  static propTypes = {
    actAsExpander: PropTypes.bool,
    avatar: PropTypes.node,
    children: PropTypes.node,
    closeIcon: PropTypes.node,
    expandable: PropTypes.bool,
    openIcon: PropTypes.node,
    showExpandableButton: PropTypes.bool,
    style: PropTypes.object,
    subtitle: PropTypes.node,
    subtitleColor: PropTypes.string,
    subtitleStyle: PropTypes.object,
    textStyle: PropTypes.object,
    title: PropTypes.node,
    titleColor: PropTypes.string,
    titleStyle: PropTypes.object,
  };

  static defaultProps = {
    actAsExpander: undefined,
    avatar: null,
    children: undefined,
    closeIcon: undefined,
    expandable: undefined,
    openIcon: undefined,
    showExpandableButton: undefined,
    style: undefined,
    subtitle: undefined,
    subtitleColor: undefined,
    subtitleStyle: undefined,
    textStyle: undefined,
    title: undefined,
    titleColor: undefined,
    titleStyle: undefined,
  };
}

CardHeader.prototype.render = view;

export default CardHeader;

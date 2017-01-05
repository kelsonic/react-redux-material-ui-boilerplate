/**
*
* AutoComplete
*
*/

import { PropTypes, PureComponent } from 'react';
import view from './view';

class AutoComplete extends PureComponent {
  static propTypes = {
    anchorOrigin: PropTypes.object,
    animated: PropTypes.bool,
    animation: PropTypes.func,
    dataSource: PropTypes.array,
    dataSourceConfig: PropTypes.object,
    disableFocusRipple: PropTypes.bool,
    errorStyle: PropTypes.object,
    errorText: PropTypes.node,
    filter: PropTypes.func,
    floatingLabelText: PropTypes.node,
    fullWidth: PropTypes.bool,
    hintText: PropTypes.node,
    listStyle: PropTypes.object,
    maxSearchResults: PropTypes.number,
    menuCloseDelay: PropTypes.number,
    menuProps: PropTypes.object,
    menuStyle: PropTypes.object,
    onClose: PropTypes.func,
    onNewRequest: PropTypes.func,
    onUpdateInput: PropTypes.func,
    open: PropTypes.bool,
    openOnFocus: PropTypes.bool,
    popoverProps: PropTypes.object,
    searchText: PropTypes.string,
    style: PropTypes.object,
    targetOrigin: PropTypes.object,
    textFieldStyle: PropTypes.object,
  };

  static defaultProps = {
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'left',
    },
    animated: true,
    animation: undefined,
    dataSource: undefined,
    dataSourceConfig: {
      text: 'text',
      value: 'value',
    },
    disableFocusRipple: true,
    errorStyle: undefined,
    errorText: undefined,
    filter: (searchText, key) => (
      searchText !== '' && key.indexOf(searchText) !== -1
    ),
    floatingLabelText: undefined,
    fullWidth: false,
    hintText: undefined,
    listStyle: undefined,
    maxSearchResults: undefined,
    menuCloseDelay: 300,
    menuProps: undefined,
    menuStyle: undefined,
    onClose: undefined,
    onNewRequest: () => {},
    onUpdateInput: () => {},
    open: false,
    openOnFocus: false,
    popoverProps: undefined,
    searchText: '',
    style: undefined,
    targetOrigin: {
      vertical: 'top',
      horizontal: 'left',
    },
    textFieldStyle: undefined,
  };
}

AutoComplete.prototype.render = view;

export default AutoComplete;

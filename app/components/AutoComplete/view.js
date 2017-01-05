/**
*
* AutoComplete view
*
*/

import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';

export default function render() {
  return (
    <AutoComplete
      anchorOrigin={this.props.anchorOrigin}
      animated={this.props.animated}
      animation={this.props.animation}
      dataSource={this.props.dataSource}
      dataSourceConfig={this.props.dataSourceConfig}
      disableFocusRipple={this.props.disableFocusRipple}
      errorStyle={this.props.errorStyle}
      errorText={this.props.errorText}
      filter={this.props.filter}
      floatingLabelText={this.props.floatingLabelText}
      fullWidth={this.props.fullWidth}
      hintText={this.props.hintText}
      listStyle={this.props.listStyle}
      maxSearchResults={this.props.maxSearchResults}
      menuCloseDelay={this.props.menuCloseDelay}
      menuProps={this.props.menuProps}
      menuStyle={this.props.menuStyle}
      onClose={this.props.onClose}
      onNewRequest={this.props.onNewRequest}
      onUpdateInput={this.props.onUpdateInput}
      open={this.props.open}
      openOnFocus={this.props.openOnFocus}
      popoverProps={this.props.popoverProps}
      searchText={this.props.searchText}
      style={this.props.style}
      targetOrigin={this.props.targetOrigin}
      textFieldStyle={this.props.textFieldStyle}
    />
  );
}

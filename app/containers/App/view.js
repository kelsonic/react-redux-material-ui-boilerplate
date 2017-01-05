import React, { Children } from 'react';
// Refer to http://www.material-ui.com/#/get-started/server-rendering for information on material-ui's Mui.
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {
  green100,
  green500,
  green700,
} from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: green500,
    primary2Color: green700,
    primary3Color: green100,
  },
});

export default function render() {
  return (
    <MuiThemeProvider muiTheme={muiTheme} >
      <div>
        {Children.toArray(this.props.children)}
      </div>
    </MuiThemeProvider>
  );
}

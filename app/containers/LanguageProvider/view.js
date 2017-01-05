import React, { Children } from 'react';
import { IntlProvider } from 'react-intl';

export default function render() {
  return (
    <IntlProvider
      key={this.props.locale}
      locale={this.props.locale}
      messages={this.props.messages[this.props.locale]}
    >
      {Children.only(this.props.children)}
    </IntlProvider>
  );
}

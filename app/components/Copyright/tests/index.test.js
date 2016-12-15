
import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import Copyright from '../index';
import { FormattedMessage } from 'react-intl';
import messages from '../messages';

describe('<Copyright />', () => {
  it('should render the copyright notice', () => {
    const renderedComponent = shallow(<Copyright />);
    expect(renderedComponent.contains(
      <div>
        <FormattedMessage {...messages.text} />
      </div>
    )).toEqual(true);
  });
});

import expect from 'expect';
import homepageReducer from '../reducer';
import { fromJS } from 'immutable';

describe('homepageReducer', () => {
  it('returns the initial state', () => {
    expect(homepageReducer(undefined, {})).toEqual(fromJS({}));
  });
});

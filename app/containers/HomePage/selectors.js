import { createSelector } from 'reselect';

/**
 * Direct selector to the homepage state domain
 */
const selectHomepageDomain = () => (state) => state.get('homepage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Homepage
 */

const selectHomepage = () => createSelector(
  selectHomepageDomain(),
  (substate) => substate.toJS()
);

export default selectHomepage;
export {
  selectHomepageDomain,
};

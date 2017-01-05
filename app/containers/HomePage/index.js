/*
 *
 * Homepage
 *
 */

import { PureComponent } from 'react';
import { connect } from 'react-redux';
import view from './view';
import selectHomepage from './selectors';

class Homepage extends PureComponent {}

Homepage.prototype.render = view;

const mapStateToProps = selectHomepage();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);

/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */

import { PureComponent } from 'react';
import view from './view';

export default class NotFound extends PureComponent {}

NotFound.prototype.render = view;

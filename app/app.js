/**
 * Ember.js - A framework for creating <strong>ambitious</strong> web applications
 *
 * @external Ember
 * @see {@link http://emberjs.com/api/}
 */

/**
 * Ember's Route class
 *
 * @name external:Ember.Route
 * @class
 * @see {@link http://emberjs.com/api/classes/Ember.Route.html}
 */

/**
 * Ember's Controller class
 *
 * @name external:Ember.Controller
 * @class
 * @see {@link http://emberjs.com/api/classes/Ember.Controller.html}
 */

/**
 * Ember's Component class
 *
 * @name external:Ember.Component
 * @class
 * @see {@link http://emberjs.com/api/classes/Ember.Component.html}
 */

/**
 * Ember's Object class
 *
 * @name external:Ember.Object
 * @class
 * @see {@link http://emberjs.com/api/classes/Ember.Object.html}
 */

import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';

var App;

Ember.MODEL_FACTORY_INJECTIONS = true;

App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver: Resolver
});

loadInitializers(App, config.modulePrefix);

export default App;

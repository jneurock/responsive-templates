/**
 * Ember.js - A framework for creating <strong>ambitious</strong> web applications
 *
 * @external Ember
 * @see {@link http://emberjs.com/api/}
 */

/**
 * Ember's Application class
 *
 * @name external:Ember.Application
 * @class
 * @see {@link http://emberjs.com/api/classes/Ember.Application.html}
 */

/**
 * Ember's Route class
 *
 * @name external:Ember.Route
 * @class
 * @see {@link http://emberjs.com/api/classes/Ember.Route.html}
 */

/**
 * The instance of Ember.Application used throughout the app
 *
 * @namespace
 * @name App
 * @extends external:Ember.Application
 */
App = Ember.Application.create();

App.Router.map(function() {
  
  this.route('content');

  this.route('layouts');

  this.route('statuses');
});
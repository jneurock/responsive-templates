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

/**
 * The instance of Ember.Application used throughout the app
 *
 * @namespace
 * @name App
 * @extends external:Ember.Application
 */
App = Ember.Application.create();

App.Router.map(function() {
  
  this.route('responsive-images');

  this.route('statuses');
  
  this.route('tricky-layout');
});
/**
 * The controller for the tricky layout page
 *
 * @memberof App
 * @constructor
 * @extends external:Ember.Controller
 */
App.TrickyLayoutController = Ember.Controller.extend({
  /**
   * Whether or not to show the code
   *
   * @memberof App.TrickyLayoutController
   * @instance
   * @type {boolean}
   */
  showCode: false,

  actions: {
    /**
     * Toggle whether or not to show the code
     *
     * @memberof App.TrickyLayoutController
     * @instance
     * @type {boolean}
     */
    toggleCode: function() {

      this.toggleProperty('showCode');
    }
  }
});
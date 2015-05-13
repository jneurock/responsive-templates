import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  
  this.route('responsive-images');

  this.route('statuses');
  
  this.route('tricky-layout');
});

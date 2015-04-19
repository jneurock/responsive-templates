Ember.Application.initializer({
  // Properties
  name: 'media',

  // Methods
  initialize: function(container, application) {

    var Media = Ember.Object.extend({
          // Properties
          small: false,
          medium: false,
          mediumUp: false,
          large: false,
          largeUp: false,
          xlarge: false,
          xlargeUp: false,
          xxlarge: false,

          // Overrides
          init: function() {

            var self = this;

            this._super();

            this.check();

            $(window).on('resize', function() {

              Ember.run.debounce(self, 'check', 150);
            });
          },

          // Methods
          check: function() {

            var width = $('body').width();

            this.setProperties({
              small: width <= 640,
              medium: width > 640 && width <= 1024,
              mediumUp: width > 640,
              large: width > 1024 && width <= 1440,
              largeUp: width > 1024,
              xlarge: width > 1440 && width <= 1920,
              xlargeUp: width > 1440,
              xxlarge: width > 1920
            });
          }
        });

    application.register('media:main', Media);

    application.inject('controller', 'media', 'media:main');
  }
});
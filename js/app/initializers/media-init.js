Ember.Application.initializer({
  // Properties
  name: 'media',

  // Methods
  initialize: function(container, application) {

    var Media = Ember.Object.extend({
          // Foundation-based properties
          small: false,
          medium: false,
          mediumUp: false,
          large: false,
          largeUp: false,
          xlarge: false,
          xlargeUp: false,
          xxlarge: false,

          // Modernizr-based properties
          landscape: true,
          portrait: false,
          retina: false,
          touch: false,

          // Overrides
          init: function() {

            this._super();

            this
              .checkSize()
              .setupResizeHandler();
          },

          // Methods
          checkSize: function() {

            var landscape = true,
                width = $('body').width();

            if (window.Modernizr) {

              landscape = !Modernizr.mq('(orientation:portrait)');

              this.setProperties({
                landscape: landscape,
                portrait: !landscape,
                retina: Modernizr.mq('(-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)'),
                touch: Modernizr.touch
              });
            }

            return this.setProperties({
              small: width <= 640,
              medium: width > 640 && width <= 1024,
              mediumUp: width > 640,
              large: width > 1024 && width <= 1440,
              largeUp: width > 1024,
              xlarge: width > 1440 && width <= 1920,
              xlargeUp: width > 1440,
              xxlarge: width > 1920
            });
          },

          setupResizeHandler: function() {

            var self = this;

            $(window).on('resize', function() {

              Ember.run.debounce(self, 'checkSize', 150);
            });
          }
        });

    application.register('media:main', Media);

    application.inject('controller', 'media', 'media:main');
  }
});
import Ember from "ember";

/**
 * An Ember component for responsive images
 *
 * @memberof App
 * @constructor
 * @extends external:Ember.Component
 */
export default Ember.Component.extend({
  // Properties
  /**
   * Value for the image if it can't be displayed
   *
   * @memberof App.ResponsiveImageComponent
   * @instance
   * @type {string}
   */
  alt: '',
  /**
   * Properties bound to the component's HTML element attributes
   *
   * @memberof App.ResponsiveImageComponent
   * @instance
   * @type {Array.<string>}
   */
  attributeBindings: [
    'alt',
    'src',
    'width'
  ],
  /**
   * The media object keeping track of query statuses
   *
   * @memberof App.ResponsiveImageComponent
   * @instance
   * @type {external:Ember.Object}
   */
  media: null,
  /**
   * A suffix for retina image paths, e.g., "@2x" or "-2x"
   *
   * @memberof App.ResponsiveImageComponent
   * @instance
   * @type {string}
   */
  retina: '',
  /**
   * A comma separated list of image sizes
   *
   * @memberof App.ResponsiveImageComponent
   * @instance
   * @type {string}
   */
  sizes: '',
  /**
   * A computed `src` property bound to the image's `src` attribute. This is null by default and
   * gets set on init.
   *
   * @memberof App.ResponsiveImageComponent
   * @instance
   */
  src: null,
  /**
   * A comma separated list of image source paths corresponding to the sizes
   *
   * @memberof App.ResponsiveImageComponent
   * @instance
   * @type {string}
   */
  srcset: '',
  /**
   * The component's HTML element tag name
   *
   * @memberof App.ResponsiveImageComponent
   * @instance
   * @type {string}
   */
  tagName: 'img',
  /**
   * The image width
   *
   * @memberof App.ResponsiveImageComponent
   * @instance
   * @type {string}
   */
  width: '',

  // Overrides
  /**
   * On init, call the method that sets up our computed image source
   *
   * @memberof App.ResponsiveImageComponent
   * @instance
   */
  init: function() {

    this._super();

    this.setComputedSrc();
  },

  // Methods
  /**
   * Setup a computed source property for the component. This is done because it observes changes
   * to properties of the media object passed in and those vary from component to component.
   *
   * @memberof App.ResponsiveImageComponent
   * @instance
   */
  setComputedSrc: function() {

    // Split comma separated sizes that were passed in
    var sizes = this.get('sizes').split(','),
        srcArgs = [];

    /*
     * For each size passed in, push a string like "media.small" into an array of arguments for the
     * computed source property
     */
    sizes.forEach(function(size) {

      srcArgs.push('media.' + size.trim());
    });

    // Push the "setSource" method into the arguments array as the computed callback
    srcArgs.push( this.get('setSource') );

    // Create the computed property
    this.set('src', Ember.computed.apply(this, srcArgs));
  },
  /**
   * This is the computed source property callback. It doesn't get called directly by the component;
   * it's just here to clearly separate the callback funcationality from the setup code in the
   * `setComputedSrc` method.
   *
   * @memberof App.ResponsiveImageComponent
   * @instance
   * @returns {string}
   */
  setSource: function() {

    var media = this.get('media'),
        retina = this.get('retina'),
        sizes = this.get('sizes').split(','),
        srcset = this.get('srcset').split(','),
        source = '',
        sourceSplit = [];

    // For each size passed in, look for a matching property in media
    for ( var i = 0, len = sizes.length; i < len; i++ ) {

      // If a matching size value was found in media and it's value is true, set the image source
      if (media[ sizes[i].trim() ]) {

        // Image sources should be split as they would look something like "img/logo.png 300w"
        sourceSplit = srcset[i].trim().split(' ');

        // The first part of the split should be the image path
        source = sourceSplit[0];

        // The image width would be specified after the path
        if (sourceSplit.length > 1) {

          this.set('width', sourceSplit[1].replace('w', ''));
        }

        break;
      }
    }

    if (media.retina) {

      source = source.replace(/\.(bmp|gif|jpg|jpeg|png)$/i, retina + '$&');
    }

    return source;
  }
});
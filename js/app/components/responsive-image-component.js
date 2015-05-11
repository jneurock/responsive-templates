App.ResponsiveImageComponent = Ember.Component.extend({
  // Properties
  alt: '',
  attributeBindings: [
    'alt',
    'src',
    'width'
  ],
  media: null,
  retina: '',
  sizes: '',
  src: null,
  srcset: '',
  tagName: 'img',
  width: '',

  // Overrides
  init: function() {

    this._super();

    this.setComputedSrc();
  },

  // Methods
  setComputedSrc: function() {

    var sizes = this.get('sizes').split(','),
        srcArgs = [];

    sizes.forEach(function(size) {

      srcArgs.push('media.' + size.trim());
    });

    srcArgs.push( this.get('setSource') );

    this.set('src', Ember.computed.apply(this, srcArgs));
  },
  setSource: function() {

    var ext = this.get('ext'),
        media = this.get('media'),
        retina = this.get('retina'),
        sizes = this.get('sizes').split(','),
        srcset = this.get('srcset').split(',')
        source = '',
        sourceSplit = [];

    // For each size passed in, look for a matching property in media
    for ( var i = 0, len = sizes.length; i < len; i++ ) {

      // If a matching size value was found in media and it's value is true, set the image source
      if (media[ sizes[i].trim() ]) {

        sourceSplit = srcset[i].trim().split(' ');

        source = sourceSplit[0];

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
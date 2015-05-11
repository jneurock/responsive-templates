module.exports = function( gulp, plugins, vb, cb ) {
  
  // Output updates
  vb.output.fonts = 'fonts/';
  vb.output.img = 'img/';

  // Source updates
  vb.sources.fonts = 'fonts/**/*';
  vb.sources.img = 'img/**/*';

  vb.tasks.build.depends = ['fonts', 'img'].concat( vb.tasks.build.depends );

  vb.tasks.fonts = {
    cb: function() {

      return gulp.src( vb.sources.fonts )
        .pipe( gulp.dest( vb.output.publish + vb.output.fonts ) );
    }
  };

  vb.tasks.img = {
    cb: function() {

      return gulp.src( vb.sources.img )
        .pipe( gulp.dest( vb.output.publish + vb.output.img ) );
    }
  };

  cb();
}
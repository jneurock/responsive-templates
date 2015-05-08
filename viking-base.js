module.exports = function( gulp, plugins, vb, cb ) {

  // Output updates
  vb.output.fonts = 'fonts/';

  // Source updates
  vb.sources.fonts = 'fonts/**/*';

  vb.tasks.build.depends = ['fonts'].concat( vb.tasks.build.depends );

  vb.tasks.fonts = {
    cb: function() {

      return gulp.src( vb.sources.fonts )
        .pipe( gulp.dest( vb.output.publish + vb.output.fonts ) );
    }
  };

  cb();
}
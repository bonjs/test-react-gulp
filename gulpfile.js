var gulp = require("gulp"),
    browserify = require('browserify'),
    reactify = require('reactify'),
    source = require('vinyl-source-stream');

gulp.task('react', function() {
    browserify(['./src/js/Head.js', './src/js/Body.js', './src/js/Panel.js'])
        .transform(reactify)
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('dist'));
});

gulp.task('jsx', function(){
	gulp.watch('src/js/*.js', ['react']);
});
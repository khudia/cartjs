var gulp = require('gulp'); 
var myth = require('gulp-myth');
var csso = require('gulp-csso');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var html = require('gulp-html-replace');
var htmlbeautify = require('gulp-html-beautify');



gulp.task('css', function() {
  return gulp.src([
  	'./dev/css/simpleCart.grid.css',
  	'./dev/css/simpleCart.busket.css',
  	'./dev/css/simpleCart.panel.css',
  	'./dev/css/*.css'
  	  ])
    .pipe(concat('simpleCart.min.css'))
    .pipe(myth())
    .pipe(csso())
    .pipe(gulp.dest('./app'));
});
gulp.task('js', function() {
  return gulp.src([
  	'./dev/js/simpleCart.core.js',
  	'./dev/js/simpleCart.init.js',
  	'./dev/js/simpleCart.panel.js',
  	'./dev/js/*.js'
  	  ])
    .pipe(concat('simpleCart.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./app'));
});

gulp.task('html', function() {
  gulp.src('./dev/simpleCart.html')
    .pipe(html({
        'css': './simpleCart.min.css',
        'js': './simpleCart.min.js'
    }))
    .pipe(gulp.dest('./app'));
});

gulp.task('htmlbeautify', function() {
 var options = {

    "indent_size": 1,
    "indent_char": " ",
    "eol": "\n",
    "indent_level": 2,
    "indent_with_tabs": false,
    "preserve_newlines": true,
    "max_preserve_newlines": 0,
    "jslint_happy": false,
    "space_after_anon_function": true,
    "brace_style": "collapse",
    "keep_array_indentation": false,
    "keep_function_indentation": false,
    "space_before_conditional": false,
    "break_chained_methods": false,
    "eval_code": false,
    "unescape_strings": false,
    "wrap_line_length": 0,
    "wrap_attributes": "auto",
    "wrap_attributes_indent_size": 1,
    "end_with_newline": true

  };

  gulp.src('./dev/simpleCart.html')
    .pipe(htmlbeautify(options))
    .pipe(gulp.dest('./dev'))
});

gulp.task('move', function() {
	gulp.src('./dev/simpleCart.json').pipe(concat('simpleCart.json')).pipe(gulp.dest('./app'));
	gulp.src('./dev/simpleCart.jpg').pipe(concat('simpleCart.jpg')).pipe(gulp.dest('./app'));
	gulp.src('./dev/response/*.php').pipe(gulp.dest('./app/response/'));
});

gulp.task('build', ['move'], function() {
    gulp.run('js');
    gulp.run('css');
  	gulp.run('move');
    gulp.run('htmlbeautify');
    gulp.run('html');

});

gulp.task('watch', function() {
  		
        gulp.watch('./dev/**/*.*', function() {
            gulp.run('build');
        });

      
});

gulp.task('default', ['watch']);

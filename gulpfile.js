var gulp = require('gulp');
var jade = require('gulp-jade');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var prefix = require('gulp-autoprefixer');
var clean = require('gulp-clean');

gulp.task('clean', function(){
  return gulp.src(['dist/*'], {read:false})
  .pipe(clean());
});

gulp.task('jade', function() {
  return gulp.src('./app/jade/*.jade')
  .pipe(jade())
  .pipe(gulp.dest('dist'));
});

gulp.task('sass', function () {
  return gulp.src(['./app/sass/**/*.sass', './app/sass/**/*.scss'])
    .pipe(sass({
      style: 'compressed',
      includePaths: ['./node_modules/bootstrap/scss', './node_modules/font-awesome/css']
    }).on('error', sass.logError))
    .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {cascade: true}))
    .pipe(gulp.dest('./dist/css'))
    .pipe(browserSync.stream());
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "dist"
        },
        port: process.env.PORT,
        host: process.env.IP
    });
});

var filesToMove = ['./app/img/*'];

gulp.task('move', function(){
  // the base option sets the relative root for the set of files,
  // preserving the folder structure
  gulp.src(filesToMove, { base: './app' })
  .pipe(gulp.dest('dist'));
});

gulp.task('watch', function(){
  gulp.watch('./app/jade/*.jade', ['jade']).on('change', browserSync.reload);
  gulp.watch(['./app/sass/**/_*.scss', './app/sass/**/*.scss'], ['sass']);
  gulp.watch("./dist/*.html").on('change', browserSync.reload);
});

gulp.task('default', ['sass','jade','browser-sync','move','watch'], function() {

});
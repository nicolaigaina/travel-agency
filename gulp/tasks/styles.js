var gulp = require('gulp'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssimport = require('postcss-import');

gulp.task('styles', (done) =>  {
    return gulp.src('./app/assets/styles/styles.css')
                 .pipe(postcss([cssimport, cssvars, nested, autoprefixer]))
                 .on('error', done)
                 .pipe(gulp.dest('./app/public/styles'));
                 
});
var gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssimport = require('postcss-import');

gulp.task('default', () => {
    console.log('Default task is running....');
});

gulp.task('html', () =>  {
    console.log('Html task is running...');
});

gulp.task('styles', () =>  {
   return gulp.src('./app/assets/styles/styles.css')
                .pipe(postcss([cssimport, cssvars, nested, autoprefixer]))
                .pipe(gulp.dest('./app/public/styles'));
});

gulp.task('watch', () =>  {
    watch('./app/index.html', () =>  {
        gulp.start('html');
    });

    watch('./app/assets/styles/**/*.css', () => {
        gulp.start('styles');
    });
});


var gulp = require('gulp'),
svgSprite = require('gulp-svg-sprite'),
rename = require('gulp-rename'),
del = require('del');

var config = {
    mode: {
        css: {
            sprite: 'sprite.svg',
            render: {
                css: {
                    template: './gulp/templates/sprite.css'
                }
            }
        }
    }
};

gulp.task('beginClean', () => {
    return del(['./app/public/sprite', './app/assets/images/sprite']);
});

gulp.task('createSprite', ['beginClean'], () => {
    return gulp.src('./app/assets/images/icons/**/*.svg')
        .pipe(svgSprite(config))
        .pipe(gulp.dest('./app/public/sprite/'));
});

gulp.task('copySpriteGraphic', ['createSprite'], () => {
    return gulp.src('./app/public/sprite/css/**/*.svg')
        .pipe(gulp.dest('./app/assets/images/sprites'));
});

gulp.task('copySpriteCSS',['createSprite'], () => {
    return gulp.src('./app/public/sprite/css/*.css')
        .pipe(rename('_sprite.css'))
        .pipe(gulp.dest('./app/assets/styles/components'));
});

gulp.task('endClean',['copySpriteGraphic', 'copySpriteCSS'], () => {
    return del('./app/public/sprite');
});

gulp.task('icons', ['beginClean','createSprite','copySpriteGraphic', 'copySpriteCSS', 'endClean']);
module.exports = function(gulp, config, plugins) {
    gulp.task('html', function() {
        return gulp.src(config.src.file.html)

            .pipe(gulp.dest(config.dist.root));

    });
    gulp.task('html:watch', ['html'], common.reload);
};

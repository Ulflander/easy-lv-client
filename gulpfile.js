var gulp = require('gulp'),
    concat = require('gulp-concat');

gulp.task('js', function() {
    return gulp.src([
            'node_modules/socket.io-client/socket.io.js',
            'index.js'
        ])
        .pipe(concat('easy-lv.js'))
        .pipe(gulp.dest('dist/'));
});

gulp.task('default', ['js'], function() {
    gulp.watch(['index.js'], ['js']);
});

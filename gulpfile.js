/*eslint-env node*/

let gulp = require('gulp');
let eslint = require('gulp-eslint');
let browserSync = require('browser-sync').create();

const lint = () => {
    return gulp.src(['js/**/*.js'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failOnError());
};

const reload = (done) => {
    browserSync.reload();
    done();
};

const initServer = (done) => {
    browserSync.init({
        server: './'
    });
    done();
};

const watch = () => {
    gulp.watch('js/**/*.js', gulp.series(lint, reload));
    gulp.watch('jasmine/spec/**/*.js', gulp.series(lint, reload));
};

gulp.task('default', lint);
gulp.task('run', gulp.series(lint, gulp.parallel(watch, initServer)));
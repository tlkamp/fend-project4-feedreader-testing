/*eslint-env node*/

let gulp = require('gulp');
let eslint = require('gulp-eslint');
let browser_sync = require('browser-sync').create();

const lint = () => {
    return gulp.src(['js/**/*.js'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failOnError());
};

const reload = (done) => {
    browser_sync.reload();
    done();
}

const init_srv = (done) => {
    browser_sync.init({
        server: './'
    });
    done();
};

const watch = () => {
    gulp.watch('js/**/*.js', gulp.series(lint, reload));
    gulp.watch('jasmine/spec/**/*.js', gulp.series(lint, reload));
};

gulp.task('default', lint);
gulp.task('run', gulp.series(lint, gulp.parallel(watch, init_srv)));
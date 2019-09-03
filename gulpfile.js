const gulp = require('gulp')
const sass = require('gulp-sass')
const browserSync = require('browser-sync')

sass.compiler = require('node-sass')

gulp.task('styles', function () {
    return gulp.src('./sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'))
        .pipe(browserSync.stream())
})

gulp.task('watch', function () {
    browserSync.init({
        server: {
            baseDir: './'
        }
    })

    gulp.watch('./sass/**/*.scss', gulp.series('styles'))
    gulp.watch('./*.html').on('change', browserSync.reload)
})

const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const purgecss = require("gulp-purgecss");

function compileSass() {
  return gulp
    .src("sass/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(
      purgecss({
        content: ["*.html"],
      })
    )
    .pipe(gulp.dest("dist/css"));
}

function watchSass() {
  gulp.watch(["sass/**/*.scss", "*.html"], compileSass);
}

exports.default = gulp.series(compileSass, watchSass);

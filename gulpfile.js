const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function compileSass() {
  return gulp
    .src("index.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("dist/css"));
}

function watchSass() {
  gulp.watch("index.scss", compileSass);
}

exports.default = gulp.series(compileSass, watchSass);

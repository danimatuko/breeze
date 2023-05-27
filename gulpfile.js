const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));

const config = {
  src: "src/**/*.scss",
  dest: "dist/css",
};

function compileSass() {
  return gulp
    .src(config.src)
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest(config.dest));
}

function watchFiles() {
  gulp.watch(config.src, compileSass);
}

exports.default = gulp.series(compileSass, watchFiles);

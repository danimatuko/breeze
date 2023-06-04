const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const purgecss = require("gulp-purgecss");
const cleanCSS = require("gulp-clean-css");

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

function purgeCSS() {
  return gulp
    .src(config.dest + "/*.css")
    .pipe(
      purgecss({
        content: ["src/**/*.html", "src/**/*.js", "*.html"], // Add any additional file types if necessary
      })
    )
    .pipe(gulp.dest(config.dest));
}

function minifyCSS() {
  return gulp
    .src(config.dest + "/*.css")
    .pipe(cleanCSS())
    .pipe(gulp.dest(config.dest));
}

function watchFiles() {
  gulp.watch(config.src, gulp.series(compileSass, purgeCSS, minifyCSS));
}

exports.default = gulp.series(compileSass, purgeCSS, minifyCSS, watchFiles);

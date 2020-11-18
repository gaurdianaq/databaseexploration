const gulp = require("gulp");
const browserify = require("browserify");
const source = require("vinyl-source-stream");
const tsify = require("tsify");
const uglify = require("gulp-uglify");
const sourcemaps = require("gulp-sourcemaps");
const buffer = require("vinyl-buffer");
const fancy_log = require("fancy-log");
const watchify = require("watchify");

const paths = {
  pages: ["src/*.html"],
};

function copy_html() {
  return gulp.src(paths.pages).pipe(gulp.dest("dist"));
}

const watchedBrowserify = watchify(
  browserify({
    basedir: ".",
    debug: true,
    entries: ["src/main.tsx"],
    cache: {},
    packageCache: {}
  }).plugin(tsify)
);

function debug_build() {
  return watchedBrowserify
    .bundle()
    .on("error", fancy_log)
    .pipe(source("bundle.js"))
    .pipe(gulp.dest("dist"));
}

//Builds a minified version without source maps
function build() {
  return browserify({
    basedir: ".",
    debug: false,
    entries: ["src/main.tsx"],
    cache: {},
    packageCache: {}
  })
    .plugin(tsify)
    .bundle()
    .pipe(source("bundle.js"))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest("dist"));
}


watchedBrowserify.on("update", debug_build);
watchedBrowserify.on("log", fancy_log);

exports.debug = gulp.parallel(copy_html, debug_build);
exports.default = gulp.parallel(copy_html, build);
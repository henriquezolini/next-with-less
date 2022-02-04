const gulp = require("gulp");
const gulpless = require("gulp-less");
const postcss = require("gulp-postcss");
const debug = require("gulp-debug");
const csso = require("gulp-csso");
const autoprefixer = require("autoprefixer");
const NpmImportPlugin = require("less-plugin-npm-import");
const through2 = require("through2");

const touch = () =>
  through2.obj(function (file, enc, cb) {
    if (file.stat) {
      file.stat.atime = file.stat.mtime = file.stat.ctime = new Date();
    }
    cb(null, file);
  });

gulp.task("theme", function () {
  const plugins = [autoprefixer()];

  return gulp
    .src("styles/styles.less")
    .pipe(debug({ title: "Less files:" }))
    .pipe(
      gulpless({
        javascriptEnabled: true,
        plugins: [new NpmImportPlugin({ prefix: "~" })]
      })
    )
    .pipe(postcss(plugins))
    .pipe(
      csso({
        debug: true
      })
    )
    .pipe(touch())
    .pipe(gulp.dest("./styles"));
});

gulp.task("watch", function () {
  return gulp.watch("styles/**/*.less", gulp.series("theme"));
});

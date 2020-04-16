const gulp = require("gulp");
const uglify = require("gulp-uglify");

gulp.task("minha_task", function () {
  return gulp.src(["./app.js"]).pipe(uglify()).pipe(gulp.dest("./dist"));
});

gulp.task("observar", function () {
  return gulp.watch(["./app.js"], function (cb) {
    gulp.src(["./app.js"]).pipe(uglify()).pipe(gulp.dest("./dist"));
    cb();
  });
});

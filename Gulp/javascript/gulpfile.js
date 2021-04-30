const { series } = require("gulp");
const gulp = require("gulp");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
const babel = require("gulp-babel");

function tranformacaJS(cb) {
  return gulp
    .src("src/**/*.js")
    .pipe(
      babel({
        comments: false,
        presets: ["env"],
      })
    )
    .pipe(uglify())
    .on("error", (erro) => console.log(erro))
    .pipe(concat("codigo.min.js"))
    .pipe(gulp.dest("build"));

  // return cb();
}

function fim(cb) {
  console.log("Fim");

  return cb();
}

exports.default = series(tranformacaJS, fim); // default é o pararel

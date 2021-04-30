const gulp = require("gulp");
const { series, parallel } = require("gulp");

const antes1 = (cb) => {
  console.log("tarefa Antes1");

  return cb();
};

const antes2 = (cb) => {
  console.log("tarefa Antes2 ");

  return cb();
};

function copy(cb) {
  gulp.src("pastaA/**/*.txt").pipe(gulp.dest("pastaB"));
  return cb();
}

const fim = (cb) => {
  console.log("tarefa FIM");

  return cb();
};

module.exports.default = series(antes1, antes2, parallel(copy, fim));

// Runtine de execução de JS no backend, utiliza se da V8.

// Conceitos de módulos, arquivos criados de forma separadas, em node cada arquivo é um modulo e pode ser importado e ser utilizado em outros, utilizando se import , require

const moduloA = require('./ModuloA');
const moduloB = require('./ModuloB');

console.log(moduloA.ola)
console.log(moduloA.bemVindo)
console.log(moduloA.ateLogo)

console.log(moduloB.bomDia)
console.log(moduloB.boaNoite())


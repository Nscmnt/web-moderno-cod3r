// Arquivo Package.json descreve o seu projeto assim como as dependencias, podendo também ser criado nele script para automatizar determinas tarefas.

// --save faz com que a dependencias fiquem salvas no arquivo descritor ( Nesse caso o axios)

// Detalhes sobre versões de dependencia, simbolo no inicio da versão ( ^ possibilita a alteração da versão Minor) | (~ possibilita alteração do Fix), no caso de não ter simbolo necessario uma versão precisa ( @0.14.1)

// utilizando o axios

const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json';

const chinesas = (f) => f.pais === 'China'
const mulheres = (f) => f.genero === 'F'
const menorSalario = (func, funcAtual) => {
  return func.salario < funcAtual.salario ? func : funcAtual
}

const axios = require('axios')

axios.get(url).then(response => {
  const funcionarios = response.data

  const func = funcionarios
      .filter(chinesas)
      .filter(mulheres)
      .reduce(menorSalario);

  console.log(func)
})









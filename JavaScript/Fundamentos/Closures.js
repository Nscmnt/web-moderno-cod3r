// Contexto lexico

const valor = "Global";

function minhaFuncao(){
    console.log(valor);
}

function exec(){
  const valor = 'Local';
  minhaFuncao()
}

exec() // 'Global


// Closure é o escopo criado quando a função é declarada
// Esse escopo permite a função acessar e manipular as variaveis externa afunção

const x = 'Global'

function fora(){
  const x = "Local"

  function dentro(){
    return x;
  }

  return dentro
}

const myFunction = fora();
console.log(myFunction());


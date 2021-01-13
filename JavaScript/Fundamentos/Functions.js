// Funções de primeira classe

// forma literal

function fn(){ }

// função em variével

const fn2 = function(){ }

// em array

const array = [ function(a, b){return a + b}, fn, fn2]

// em objetos

const obj = {}

obj.falar = function(){
  console.log("Olá");
}

obj.falar();

// Função por parâmentro

function run(fn){
  fn();
}

run(() => console.log("Executando ... "))

// Retornar por parâmento

function soma(a, b){
  return function(c){
    return a + b + c;
  }
}

console.log(soma(2, 2)(6));

// paramentros default

function saudacao(nome){
  const user = nome || "Visitante";

  return `Bem vindo ${user}`;
}
console.log(saudacao('Jorge')); //Bem vindo Jorge 
console.log(saudacao()); // Bem vindo Visitante

// this

/*
  this quando usado em função normal possui contexto alterado dependendo de é chamada.
  this quando usado em arrow functions mantém contexto onde for criada.
*/

// utilizando bind | utilizado para definir o this da chamada do metodo

const pessoa = {
  saudacao: "Olá",
  falar(){
    return this.saudacao;
  }
}

console.log(pessoa.falar());

const falando = pessoa.falar;
console.log(falando()); // underfined

const falarPessoa = pessoa.falar.bind(pessoa);
console.log(falarPessoa()); // Olá

// arrow e this

let comparaComThis = function (param) {
  console.log(this === param)
}

comparaComThis(global) // true

const o = {}
comparaComThis = comparaComThis.bind(o)
comparaComThis(global) // false
comparaComThis(o) // true

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global) // false
comparaComThisArrow(module.exports) // true

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(o) //false
comparaComThisArrow(module.exports) //true


// função anonima

const sum = function(a, b){
  return a + b;
}

const imprimirResultado = function(a, b, operacao = sum){
  console.log(operacao(a, b));
}

imprimirResultado(3, 4);
imprimirResultado(3, 4, sum);
imprimirResultado(3, 4, (a, b) =>{
  return a - b;
});


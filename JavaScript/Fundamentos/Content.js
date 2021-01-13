// Organização de código JS - Resumo do básico do JS

console.log("Setença de código");

// Blocos de código

{
  {
    console.log("Olá");
    console.log("Mundo!");
  }
}

// Códigos JS podem ser execitadas online, console de browser, node, etc. 

/**
 * comentários em javaScript com
 * mais de uma linha
 */

 // + - * / % - Operadores aritméticos

// > < >= <=  == === (igualando tipo e valor) - Operadores relacionais


// || (ou) && (e) != (Negação) -  Operadores lógicos

 // Variáveis - tipagem fraca ( Não possui tipagem declarada no momento da declaração)- 
 // Diferenças entre var, let e const.

 var variavel = "variável";
 let variavelLet = 5;
 const constante = 3.14;

 // Declarando com let a variavel não pode ser redeclarada, com var é possivel ( dentro do mesmo escopo), constantes não podem reatribuir valor.


 // Tipos de dados JS


 // Number
 const peso = Number('67');
 const peso2 = Number('5.5');

 console.log(peso); // 67
 console.log(Number.isInteger(peso2)); // false

 // Math

 const raio = 5.6;

 const area = Math.PI * Math.pow(raio, 2); // 98.52
 console.log(area.toFixed(2));

 // String

 const s = "strings".charAt(0);
 console.log(s); // s
 const string = 'tamanho';
 console.log(string.length); // 7

 // template

 const nome = "Jorge";

 const saudacao = ` Olá ${nome}`;

 console.log(saudacao);

 // boolean

 let isAtivo = false;

 isAtivo = 1;

 console.log(!!isAtivo); // true

 console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('pra finalizar...')
console.log(!!('' || null || 0 || ' '))

let name = 'Lucas'
console.log(name || 'Desconhecido')

// Array - array flexivel, heterogenio.. 

const array = ["CPM22"];
array[1] = "Creed";
array.push("link Park");

array.length; // 3
array.forEach((band) => console.log(band)); // ietra sobre o array

// objetos

const produto = {
  id:1,
  modelo: 2020
};
produto.nome = "PS5";
produto.preco = 4998.90;
produto['atributo dinamico'] = 'Inserido';

console.log(Object.keys(produto)); // iteração das chaves

// null e undefined

let valor;
console.log(valor); // undefined - ( não foi inicializado)

valor = null; // nenhum apontamento de memoria ( ausencia de valor )

const obj = {};
console.log(obj.nome); // undefined

// função - quase tudo é função

console.log(typeof Object); // function

class Produto {}; console.log(typeof Produto); // function

// Exemplos de funções

function imprimirSoma(a = 0, b = 0){ // default value
  return a + b;
};

console.log(imprimirSoma(7, 3)); // 10
console.log(imprimirSoma(7)); // 7

// FUnção atribuida a
const fn = function(numero){
  if(typeof numero === 'number') return numero;
  else { return "não é um número ..."}
}
console.log(fn(10));

// arrow
const sum = (a, b) =>  a + b;  // com returno implicito

// Difenreças entre var e let

{var n = "Jorge";
}  // Não respeita escopo de bloco a não bloco de função
console.log(n); // Jorge

var n = "Nascimento"; // Pode ser redeclarada
console.log(n); // 'Nascimento'

// usando let

{ let nLet = "Jorge";} // Respeita o escopo de bloco e não pode ser redeclarado no mesmo escopo

// console.log(nLet); // Let is not defined


// hoisting - variavel içada para topo do escopo (var)

console.log(h); // undefined
var h = 2;
console.log(h); // 2

// Object / function

console.log(typeof Object) // function
console.log(typeof new Object) // object

const Cliente = function() {}
console.log(typeof Cliente) // function
console.log(typeof new Cliente) // object

// class Produto {} // ES 2015 (ES6)
console.log(typeof Produto) // function
console.log(typeof new Produto()) // object

// Destructuring

const pessoa = {
  nome: "Ana",
  idade: 25,
  endereco: {
    logradouro: "Rua A",
    numero: 20
  }
}

const {nome: nomePessoa , idade: idadePessoa} = pessoa;

console.log(nomePessoa, idadePessoa); // Ana 25

// utilizando com array
const [a]  = [10];

const [n1,, n3,, n6] = [ 2,5,6,7, 8];

console.log(n1, n3, n6); // 2, 6, 8

// com função
function rand({min = 0, max = 1000}){
  const valor = Math.random() * (max - min) + min;
  return Math.floor(valor);
}

console.log(rand({max : 50, min:40}))


// Contexto de execução 

// No browser o o onjeto global é o window, enquanto no node possui o nome de global, a diferença é que o o windows refere se ao this global enquando o node possui o module.export como o contexto de execução do this.

//IIFE

(function(){
  console.log("Será invocada na hora")
  console.log("Foge do escopo mais abrangente")
})()

























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












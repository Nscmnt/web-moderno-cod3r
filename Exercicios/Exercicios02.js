// Crie uma função que retorna a string "Olá, " concatenada com um argumento text (a ser passado para a função) e com ponto de exclamação "!" no final.

const cumprimenar = name => console.log(`Olá ${name} !`);

cumprimenar('Jorge');

/**Escreva uma função que receba a idade de uma pessoa em anos e retorne a mesma idade em dias.
📕 Obs: considere que um ano tem 365 dias. Desconsidere anos bissextos (com 366 dias) e
desconsidere também dias decorridos desde o último aniversário.
Exemplos:
converterIdadeEmAnosParaDias(25) // retornará 9125
converterIdadeEmAnosParaDias(70) // retornará 25550 */

const getDayOfBirday = (age) => age * 365;

console.log(getDayOfBirday(25));

/**Desenvolva uma função que recebe dois parâmetros, um é a quantidade de horas trabalhadas por um
funcionário num mês, e o quanto ele recebe por hora. O retorno da função deve ser a string "Salário igual a R$
X", em que X é o quanto o funcionário ganhou no mês.
Exemplos:
calcularSalario(150, 40.5) // retornará "Salário igual a R$ 6075" */

const getSalary = (hours, valueHours) => {
  return `Salário igual a R$ ${hours * valueHours}`;
}

console.log(getSalary(150, 40.5));

/**Crie uma função que recebe um número (de 1 a 12 e retorne o mês correspondente como uma string. Por
exemplo, se a entrada for 2, a função deverá retornar "fevereiro", pois este é o 2° mês.
Exemplos:
nomeDoMes(1) // retornará "janeiro"
nomeDoMes(4) // retornará "abril" */

const getMouth = (number) => {  
  const mouths = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto","Setembro", "Outubro", "Novembro", "Dezembro"];

  if(mouths[number - 1] === undefined) {
    return `Invalid value for mouth`;
  }

  return mouths[number - 1];
}

console.log(getMouth(11));
console.log(getMouth(15));

// Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo.


const maiorOuIgual = ( n1, n2)=>{
  if(n1 > n2 || n1 === n2){
    console.log("true")
  }else console.log("false")
}

maiorOuIgual(0, 0) // retornará true
maiorOuIgual(0, "0") // retornará false
maiorOuIgual(5, 1) // retornará true

/**
  * Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto
  que o segundo será o número de vezes que haverá repetição. Um array será retornado.
  Exemplos:
  repetir("código", 2) // retornará ["código", "código"]
  repetir(7, 3) // retornará [7, 7, 7]

 */


 const repetir = (value, repete) => {
   const array = []

    for (let i = 0; i < repete; i++) {
      array[i] = value;     
    }

   return array;
 }


 console.log(repetir('Código', 3));
 console.log(repetir(7, 0))

 /**
  * Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo
  array:
  Exemplos:
  receberPrimeiroEUltimoElemento([7,14,"olá"]) // retornará [7, "olá"]
  receberPrimeiroEUltimoElemento([-100, "aplicativo", 16]) // retornará [-100, 16]

  */

  const receberPrimeiroEUltimoElemento = (array) => {
    const newArray = []
    newArray.push(array[0]); 
    newArray.push(array[array.length - 1])

    return newArray;
  }

  console.log(receberPrimeiroEUltimoElemento([-100, "aplicativo", 16]))

  /**
   * Quando temos um objeto e manipulamos seus atributos, adicionando, atualizando ou removendo-os, estamos
apenas modificando-o, mas, em essência, o objeto continua o mesmo, ou seja a sua referência de memória é a
mesma.
Num projeto que você está trabalhando, você foi designado a refatorar diversas funções para que façam
cópias de objetos e manipulem os dados dessas cópias, com o intuito de evitar efeitos indesejáveis em
algumas situações devido a referências a objetos. Abaixo, está a descrição de uma dessas funções.
Você escreverá uma função que recebe um objeto como primeiro parâmetro e, como segundo parâmetro, o
nome de uma propriedade contida nesse objeto. Em seguida, retorne uma cópia desse objeto sem a
propriedade especificada no segundo parâmetro.
Exercícios - Curso Fundamentos de Programação
 2
Exemplos:
removerPropriedade({a: 1, b: 2}, "a") // retornará {b: 2}
removerPropriedade({
id: 20,
nome: "caneta",
descricao: "Não preenchido"
}, "descricao") // retornará {id: 20, nome: "caneta"}
💡
 A removerPropriedade, fim de testar se o objeto você poderá retornado usar não a função é o mesmo Object.is(), que foi por passado exemplo:
 como parâmetro para a função
Object.is(removerPropriedade(objeto, "descricao"), objeto)
Retornará false se o objeto não for o mesmo.

 */


 const removerPropriedade = (obj, prop) => {
  const newObj = {}

  Object.assign(newObj, obj);
  delete newObj[prop];

  console.log(Object.is(newObj, obj))

  return newObj;
}

console.log(removerPropriedade({a: 1, b: 2}, "a"));

console.log(removerPropriedade({
  id: 20,
  nome: "caneta",
  descricao: "Não preenchido"
  }, "descricao"))


  /**
   * Crie uma função que receba um array de elementos e retorne um array somente com os números presentes no
  array recebido como parâmetro.
  Exemplos:
  filtrarNumeros(["Javascript", 1, "3", "Web", 20]) // retornará [1, 20]
  filtrarNumeros(["a", "c"]) // retornará []

   */

   const filtrarNumeros = (array) => {
     const arrayNumber = array.filter((n) =>{
        return typeof n === 'number'
     })

     return arrayNumber;
   }

   console.log(filtrarNumeros(["Javascript", 1, "3", "Web", 20]))

   // Escreva uma função que receba um array de números e retornará a soma de todos os números desse array.
const somarNumeros = (numbers) =>{
  let soma = 0;
  numbers.forEach((n) => {
    soma+= n;
  });

  return soma;
}

console.log(somarNumeros([10, 10, 10])) // retornará 30
somarNumeros([15, 15, 15, 15]) // retornará 60

/**
 * Você está trabalhando numa aplicação pessoal de controle de despesas. Na tela principal dessa aplicação, é
possível adicionar produtos ou serviços, informando nome, categoria e preço. Uma funcionalidade que você
está desenvolvendo no momento é a de somar o total das despesas.
Crie uma função que receba um array de produtos e retorne o total das despesas.

*/


const despesasTotais = (produtos) => {
  let despesas = 0;

  produtos.map((produto) => {
    despesas += produto.preco;
  })

  return despesas
}

console.log(despesasTotais([
  {nome: "Jornal online", categoria: "Informação", preco: 89.99},
  {nome: "Cinema", categoria: "Entretenimento", preco: 150}
  ]));


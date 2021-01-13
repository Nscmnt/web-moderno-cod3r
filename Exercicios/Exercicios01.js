// 01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração, multiplicação e divisão desses valores.

function getOperacion(a, b){
  console.log(`A Soma de ${a} e ${b} é = ${a + b}`);
  console.log(`A Subtração de ${a} e ${b} é = ${a - b}`);
  console.log(`A Multiplicação de ${a} e ${b} é = ${a * b}`);
  console.log(`A Divisão de ${a} e ${b} é = ${a - b}`);
}

getOperacion(5, 5);

// 02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
// Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
// Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
// ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
// triângulo).

function getTypeTriangle(a, b, c){

  if(a == b && a == c && c == b){
    console.log("Triangulo Equilátero")
  }else if(a == b || b == c || c == a ){
    console.log("Triangulo Isósceles")
  }else{
    console.log("Triangulo Escaleno")
  }

}

getTypeTriangle(4, 4, 4);
getTypeTriangle(5, 4, 5);
getTypeTriangle(4, 5, 6);

// 03) Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.

function exponencial(b, e){
  return Math.pow(b, e);
}

console.log(exponencial(2, 5));

// 04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado o resto da divisão destes dois valores.

function restDivisao(dividendo, divisor){
  const modulo = dividendo % divisor;
  console.log(modulo);
}

restDivisao(5,2); // => 1

/**
 * 05) Lidar com números em JavaScript pode dar muita dor de cabeça. Você já viu o que acontece quando faz o
seguinte comando no console: console.log(0.1 + 0.2); O resultado será: 0.30000000000000004. Outra coisa
importante de observar, é o fato que o ponto é utilizado no lugar da vírgula e vice versa. Com isso, vamos fazer
um exercício simples para mostrar dinheiro sempre da forma correta. Desenvolva uma função JavaScript para
que ela receba um valor como 0.30000000000000004 e retorne R$0,30 (observe a vírgula e o ponto).
 */

 function formart(value){

  const valueConvert = parseFloat(value).toFixed(2);
  const parsed = valueConvert.toString().replace('.',',')
  console.log(`R$${parsed}`)

 }

 formart(0.30000000000000000000000); // => R$ 0,30
 formart(0.45254); // => R$ 0,45

 /**
  * 06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. 
  * A primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda retornará o valor da aplicação sob o regime de juros compostos.
  */

  function simpleInterest(capital, interest, time){

    const capitalFinal = capital + (interest * time * capital);

    return capitalFinal;
  }

  console.log(simpleInterest(110, 0.1, 10)); // => 220

  function compoundInterest(capital, interest, time){
    let total = capital;

    console.log("===== Juros Compostos ====")
    for(i = 1; i <= time; i++){      
      total = total + (total * interest);

      console.log(` Mês ${i} valor R$ ${total.toFixed(2)}`);
    }

    return total;
  }

compoundInterest(100, 0.1, 10); // ==> 259,37

/**
 * 07) Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
jogo. (Número do pior jogo).
Obs.: O primeiro jogo não conta como novo recorde do melhor.
Exemplo:
String: “10 20 20 8 25 3 0 30 1”
Retorno: [3, 7] (Significa que ele bateu três vezes seu recorde de melhor pontuação e a pior pontuação
aconteceu no sétimo jogo.)
 */

 function getRecord(...score){
   let records= -1;
   let lowestScore = 0;
   let valueRecord = 0;
   let value = 0;

   for (const i in score) {
     if(valueRecord < score[i]){
       valueRecord = score[i];
       records += + 1;
     }

     if(i == 0){
       value = score[0]
     }else if(score[i] < value){
       value = score[i];
       lowestScore = score.indexOf(score[i]) + 1;
     }
   }

   return [ records, lowestScore]
 }

 console.log(getRecord(10, 20, 20, 8, 25, 3, 0, 30, 1));

 console.log(getRecord(10, 20, 1, 0, 50))

 /**
  * 08) Crie uma função que verifica se um número inteiro passado como parâmetro é divisível por 3 e retorne true
ou false.
  */

  function isDivisibleByThree(number){
    if(number % 3 == 0)  return true;

    else return false;
  } 

  console.log(isDivisibleByThree(3));
  console.log(isDivisibleByThree(5));
  console.log(isDivisibleByThree(12));
  console.log(isDivisibleByThree(15));

  // 09) Faça um algoritmo que calcule o fatorial de um número
  
  function factorial(n){
    if(n <= 1) return 1;
    else{
      return n + factorial(n - 1);
    } 
  }

  console.log(factorial(5))

  // 10) Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.

  function getDayWeek(day){
    switch(day){
      case 1: 
        console.log("Domingo"); break;
      case 2: 
        console.log("Segunda"); break;
      case 3: 
        console.log("Terça"); break;
      case 4: 
        console.log("Quarta"); break;
      case 5: 
        console.log("Quinta"); break;
      case 6: 
        console.log("Sexta"); break;
      case 7: 
        console.log("Sabado"); break;
      default:
        console.log("invalid day")
     
    }
  }

getDayWeek(1);
getDayWeek(5);
getDayWeek(7)
getDayWeek(10)

// 11) Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta e que possua três casos: Caso maçã, retorne no console: “Não vendemos esta fruta aqui”. Caso kiwi, retorne: “Estamos com escassez de kiwis”. Caso melancia, retorne: “Aqui está, são 3 reais o quilo”. Teste com estas três opções .Crie também um default, que retornará uma mensagem de erro no console.

function fruitsSale(fruitName){
  switch(fruitName){
    case "Maçã": 
    console.log("Não vendemos esta fruta aqui"); break;
    case "Kiwi": 
    console.log("Estamos com escassez de kiwis"); break;
    case "Melancia": 
    console.log("Aqui está, são 3 reais o quilo."); break;
    default: 
    console.log("Fruita desconhecida");
  }
}

fruitsSale("Melancia");
fruitsSale('Kiwi');
fruitsSale("Maçã");
fruitsSale("Outra fruta")

/* 12) Um homem decidiu ir à uma revenda comprar um carro. Ele deseja comprar um carro hatch, e a revenda
possui, além de carros hatch, sedans, motocicletas e caminhonetes. Utilizando uma estrutura switch, caso o
comprador queira o hatch, retorne: “Compra efetuada com sucesso”. Nas outras opções, retorne: “Tem certeza
que não prefere este modelo?”. Caso seja especificado um modelo que não está disponível, retorne no console: “Não trabalhamos com este tipo de automóvel aqui” */

const carSales = function(carModel){
  switch (carModel) {
    case "Hatch":
      console.log("Compra efetuada com sucesso");
    break;

    case "Sedans":
      console.log("Tem certeza que não prefere este modelo?");
    break;

    case "Motocicletas":
      console.log("Tem certeza que não prefere este modelo?");
    break;

    case "Caminhonetes":
      console.log("Tem certeza que não prefere este modelo?");
    break;

  default:
    console.log("Não trabalhamos com este tipo de automóvel aqui");
    break;
  }
}

carSales('Hatch');
carSales("Motocicletas");
carSales("Outra");

/* 13) Utilizando a estrutura do Switch faça um programa que simule uma calculadora básicaO programa recebe como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores
numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e 3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas. */

function calc(n1, op, n2){
  switch (op) {
    case "+":
      console.log(`A Soma é ${n1 + n2}`)
    break;
    case "-":
      console.log(`A Subtração é ${n1 - n2}`)
    break;
    case "/":
      console.log(`A Divisão é ${n1 / n2}`)
    break;
    case "*":
      console.log(`A Multiplicação é ${n1 * n2}`)
    break;  
    default:
      console.log("Operação inválida")
    break;
  }
}

calc(5, "+", 5);
calc(5, "-", 5);
calc(5, "/", 5);
calc(5, "*", 5);

/* 14) 
  O cardápio de uma lanchonete é o seguinte:
Código Descrição do Produto Preço
100   Cachorro Quente       R$ 3,00
200   Hambúrguer Simples    R$ 4,00
300   Cheeseburguer         R$ 5,50
400   Bauru                 R$ 7,50
500   Refrigerante          R$ 3,50
600   Suco                  R$ 2,80
Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
comando switch. Crie um caso default para produto não existente.
*/

function orderCalc(cod, quantity){

  switch (cod) {
    case 100:
      console.log(`Produto: Hot Dog | Preço R$ ${calcValueOrder(quantity, 3)}`);  
    break;
    case 200:
      console.log(`Produto: Hamburguer | Preço R$ ${calcValueOrder(quantity, 4)}`);  
    break;
    case 300:
      console.log(`Produto: Cheeseburguer | Preço R$ ${calcValueOrder(quantity, 5.5)}`);  
    break;
    case 400:
      console.log(`Produto: Bauru | Preço R$ ${calcValueOrder(quantity, 7.5)}`);  
    break;
    case 500:
      console.log(`Produto: Refrigerante | Preço R$ ${calcValueOrder(quantity, 3.5)}`);  
    break;
    case 600:
      console.log(`Produto: Suco | Preço R$ ${calcValueOrder(quantity, 2.8)}`);  
    break;  
    default:
      console.log("Produto não existente")
    break;
  }
}

function calcValueOrder(quantity, price){
  const priceCalc = quantity * price;
  return priceCalc.toFixed(2);
}

orderCalc(100, 5)
orderCalc(500, 10)
orderCalc(700, 5)


// 15) ​ Crie um programa que imprima 11 vezes a frase " Hello World!" utilizando uma estrutura de repetição while.

function printHelloWorld(){
  let i = 0;
  while(i <= 11){
    console.log("Hello World");
    i++;
  }
}

printHelloWorld();


// 16) ​Escrever um programa para exibir os números de 1 até 50 na tela. (Com IIFE e Arrow function)

(() => {
  let c = 0;

  while (c <= 50) {
    console.log(` Number ${c}`);
    c++
  }
})()

// 17) Fazer um programa para encontrar todos os pares entre 1 e 100.

function isEven(interval){

  for (let i = 0; i < interval; i++) {
     
    if( i % 2 == 0){
      console.log("Número Par " + i);
    }        
  }
}

isEven(100)

// 18) ​ ​Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.

const arr = [2, 5, 4, 8, 10, 3, 1, 4, 7, 11, 13, 19]

const nArr = arr.filter((n) => {
  if( n % 2 === 0) return n;
})

console.log(nArr);

// 19) ​Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos deles estão fora do intervalo, escrevendo estas informações.

function CountArrayInterval(array){
  let intervalOn = 0 , intervalOff = 0;
  for (let i = 0; i < array.length; i++) {
    if(array[i] >= 10 && array[i]<= 20){
      intervalOn++
    }else{ intervalOff++}    
  }
  console.log(`${intervalOn} estão dentro do intervalo entre 10 e 20 ${intervalOff} não estão.`)
}

CountArrayInterval(arr);

//20)  Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.

function biggerAndSmaller(array){

  let bigger = 0, smaller = array[0];

  for (let i = 0; i < array.length; i++) {
    if( bigger < array[i]){
      bigger = array[i];
    }else if(smaller > array[i]){
      smaller = array[i];
    }    
  }

  return [bigger, smaller];
}

console.log(biggerAndSmaller(arr));

// 21)  ​Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais.
//Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console.

const vetorInteiro = [5, 7, 9];
const vetorString = ['Jorge', 'Anna', "Loki"];
const vetorDouble = [5.5, 6.7, 8.9];

const vetorConcat = vetorInteiro.concat(vetorString).concat(vetorDouble);

console.log(vetorConcat);




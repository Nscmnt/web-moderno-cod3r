// Funções chamadas apartir de um evento
const fabricantes = ['Ferrari', 'Masseratti', 'Tesla']
function imprimir(nome, indice){
  console.log(`${indice + 1} : ${nome}`)
}

fabricantes.forEach(imprimir); // Função passada para o foreach que retorna o nome de cada elemento e seu indice no array

// Facilidades das callbacks - realizar um filtro em um array para extrair notas

const notas =  [5.4, 8.1, 7, 7.2, 6.5, 2, 9];

// extrair notas até 7
let notasBaixas = [];
function returnNoteLower(notas){
  for(let i in notas){
    if(notas[i] < 7) notasBaixas.push(notas[i]);
  }
}

returnNoteLower(notas);
console.log(notasBaixas);

// com callback

notasBaixas = notas.filter(function (nota) {
    return nota < 7;
  } );

  console.log(notasBaixas);

  // Função construtora - "class"

function Carro (velocidadeMaxima = 200, delta = 5){
  // Atributo privado
  let velocidadeAtual = 0;

  // metodo publico
  this.acelerar = function(){
    if(velocidadeAtual + delta <= velocidadeMaxima){
      velocidadeAtual += delta;
    }else{
      velocidadeAtual = velocidadeMaxima;
    }
  }
  // metodo publico

  this.getVelocidadeAtual = function(){
    return velocidadeAtual;
  }

}

const uno = new Carro()

uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar();
console.log(ferrari.getVelocidadeAtual())





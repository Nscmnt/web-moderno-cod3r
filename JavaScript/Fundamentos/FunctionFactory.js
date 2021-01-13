const prod1 = {
  nome: "...",
  preco: 50
}

const prod2 = {
  nome: "...",
  preco: 60
}

// Função fabrica

function createPerson(nome, sobrenome, idade){
  return {
    nome,
    sobrenome,
    idade
  }
}

const pessoa = createPerson('Jorge', "Nascimento", 31)
console.log(pessoa);

function Pessoa(nome){
  this.nome = nome;

  this.falar = function(){
    console.log(`Meu nome é ${nome}`)
  } 
    
}

const eu = new Pessoa('Jorge');
eu.falar()
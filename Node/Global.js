global.MinhaApp = {
  saudacao(){
    return 'Estou em todos os lugares'
  },
  nome: 'Hey'
}

// Pode ser acessado de forma global apenas chamando o require(./Global)

//Obs: This dentro de uma função aponta para global, enquanto dentro do modulo aponta para o module.exports
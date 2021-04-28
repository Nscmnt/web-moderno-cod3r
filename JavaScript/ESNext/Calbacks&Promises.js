// http://files.cod3r.com.br/curso-js/turmaA.json

//Sem promisse

const http = require('http')

// const getTurma = (letra, callback) => {
//   const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`

//   http.get(url, res => {
//     let resultado = ''

//     res.on('data', dados =>{
//       resultado += dados
//     })

//     res.on('end', () => {
//       callback(JSON.parse(resultado))
//     })

//   })
// }

let nomes = []

// getTurma('A', alunos => {
//   nomes = nomes.concat(alunos.map( a => `A: ${a.nome}`))
//   getTurma('B', alunos => {
//     nomes = nomes.concat(alunos.map( a => `B: ${a.nome}`))
//     getTurma('C', alunos => {
//       nomes = nomes.concat(alunos.map( a => `C: ${a.nome}`))
//       console.log(nomes)
//     })
//   })    
// })

// Com promisse

const getTurma = letra => {
  const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
  return new Promise((resolve, reject) => {
    http.get(url, res => {
      let resultado = ''
      
      res.on('data', dados =>{
        resultado += dados
      })
      
      res.on('end', () => {
        try{
          resolve(JSON.parse(resultado))
        }catch(e){
          reject(e)
        }
      })
    })
  })
}


Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
    .then(turmas => [].concat(...turmas))
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then(nomes => console.log(nomes))
    .catch(e => console.log(e.message))

// getTurma('D').catch(e => console.log(e.message))  
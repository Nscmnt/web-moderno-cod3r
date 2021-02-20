// Utilizando o modulo core do node para leitura de arquivo

const fs = require('fs')

const caminho =  __dirname + '/arquivo.json' 

// sincrono
const conteudo = fs.readFileSync(caminho, 'utf-8')

console.log(conteudo)

// async

fs.readFile(caminho, 'utf-8', (err, conteudo) =>{
  const config = JSON.parse(conteudo)

  console.log(`${config.db.host} : ${config.db.port}`)
})

const config = require('./arquivo.json')
console.log(config.db)

// lendo pasta

fs.readdir(__dirname, (err, arquivos) => {
  console.log("conteudo da pasta ...")
  console.log(arquivos)
})

// escrevendo com fs

const produto = {
  nome: "Celular",
  preco: 1248.54,
  desconto: 0.15
}

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {
  console.log(err || "Arquivo Salvo")
} )
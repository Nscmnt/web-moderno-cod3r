document.querySelectorAll('a').forEach((link) => {
  const conteudo = document.getElementById('conteudo')

  link.onclick = function(e){
    e.preventDefault()

    fetch(link.href)
    .then( res => res.text())
    .then( html => conteudo.innerHTML = html)

  }
})

const lista = document.querySelector('.tree')
console.log("olá")

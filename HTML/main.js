document.querySelectorAll('a').forEach((link) => {
  const conteudo = document.getElementById('conteudo')

  link.addEventListener('click', function(e){
    e.preventDefault()

    fetch(link.href)
    .then( res => res.text())
    .then( html => conteudo.innerHTML = html) 

    })
})


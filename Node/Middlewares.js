// middleware - chain of responsability

const passo1 = (contexto, next) => {
  contexto.valor1 = 'mid1'
  next()
}

const passo2 = (contexto, next) => {
  contexto.valor2 = 'mid2'
  next()
}

const passo3 = contexto => contexto.valor3 = 'mid2'

const exec =(contexto, ...middlewares) => {
  const execMiddleware = indice => {
    middlewares && indice < middlewares.length && middlewares[indice](contexto, () => execMiddleware(indice + 1))
  }
  execMiddleware(0)
}

const contexto = {}
exec(contexto, passo1, passo2, passo3)
console.log(contexto)
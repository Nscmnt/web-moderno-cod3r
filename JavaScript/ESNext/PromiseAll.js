function TestPromise(){
  return new Promise((resolve, reject) => {    
      const numero = (Math.random() * 100).toFixed(2)

      if(numero > 10 ){
        resolve(`Número sorteado ${numero}`)
      }
      else{
        reject(`Número não esperado ${numero}`)
      }
 })

}

// Promise.all([
//   TestPromise(),
//   TestPromise(),
//   TestPromise()
// ])
TestPromise()
  .then((res) => { console.log(res) })
  .catch( (e) => { console.log(e)})


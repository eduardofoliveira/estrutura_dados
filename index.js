console.time('inicio')
const HashTable = require('./HashTable')

const lista = new HashTable()

lista.put('11961197559-cloud.cloudcom.com.br', { to: '551135880866', from: '11961197559' })

for (let i = 35880000; i <= 35889999; i++) {
  lista.put('11961197559-cloud.cloudcom.com.br', { to: '551135880866', from: '11961197559' })
}

console.log(lista.get('11961197559-cloud.cloudcom.com.br'))
console.timeEnd('inicio')

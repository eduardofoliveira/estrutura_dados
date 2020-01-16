const LinkedList = require('./LinkedList')

const loselosehashcode = (key) => {
  let hash = 0
  for (let i = 0; i < key.length; i++) {
    hash += key.charCodeAt(i)
  }
  return hash % 37
}

class ValuePair {
  constructor (key, value) {
    this.key = key
    this.value = value
    this.toString = () => { return `[ ${this.key} - ${this.value}]` }
  }
}

class HashTable {
  constructor () {
    this.table = []
  }

  put (key, value) {
    const position = loselosehashcode(key)

    if (this.table[position] === undefined) {
      this.table[position] = new LinkedList()
    }
    this.table[position].append(new ValuePair(key, value))
  }

  remove (key) {
    const position = loselosehashcode(key)

    if (this.table[position] !== undefined) {
      let current = this.table[position].getHead()

      while (current.next) {
        if (current.element.key === key) {
          this.table[position].remove(current.element)
          if (this.table[position].isEmpty()) {
            this.table[position] = undefined
          }
          return true
        }
        current = current.next
      }
      if (current.element.key === key) {
        this.table[position].remove(current.element)
        if (this.table[position].isEmpty()) {
          this.table[position] = undefined
        }
        return true
      }
    }
    return false
  }

  get (key) {
    const position = loselosehashcode(key)

    if (this.table[position] !== undefined) {
      let current = this.table[position].getHead()

      while (current.next) {
        if (current.element.key === key) {
          return current.element.value
        }
        current = current.next
      }
      if (current.element.key === key) {
        return current.element.value
      }
    }
    return undefined
  }

  print () {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i] !== undefined) {
        console.log(`${i} : ${this.table[i]}`)
      }
    }
  }
}

module.exports = HashTable

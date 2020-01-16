class Dictionary {
  constructor () {
    this.itens = {}
  }

  set (key, value) {
    this.itens[key] = value
  }

  delete (key) {
    if (this.has(key)) {
      delete this.itens[key]
      return true
    }
    return false
  }

  has (key) {
    // eslint-disable-next-line no-prototype-builtins
    return this.itens.hasOwnProperty(key)
  }

  get (key) {
    return this.has(key) ? this.itens[key] : undefined
  }

  clear () {
    this.itens = []
  }

  size () {
    return Object.keys(this.itens).length
  }

  keys () {
    return Object.keys(this.itens)
  }

  values () {
    const values = []
    const keys = Object.keys(this.itens)

    for (let i = 0; i < this.itens.length; i++) {
      values.push(this.itens[keys[i]])
    }

    return values
  }

  getItems () {
    return this.itens
  }
}

module.exports = Dictionary

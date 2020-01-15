class Node {
  constructor (element) {
    this.element = element
    this.next = null
  }
}

class LinkedList {
  constructor () {
    this.length = 0
    this.head = null
  }

  append (element) {
    const node = new Node(element)
    let current = null

    if (this.head === null) {
      this.head = node
    } else {
      current = this.head

      while (current.next) {
        current = current.next
      }

      current.next = node
    }
    this.length++
  }

  insert (position, element) {

  }

  removeAt (position) {

  }

  remove (element) {

  }

  indexOf (element) {

  }

  isEmpty () {

  }

  size () {

  }

  toString () {
    let current = this.head
    let string = ''

    while (current) {
      string += current.element + ' '
      current = current.next
    }

    return string
  }

  print () {
    console.log(this.toString())
  }
}

module.exports = LinkedList

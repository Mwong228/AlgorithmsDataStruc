class Node {
    constructor(value) {
        this.value = value
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }
    push(value) {
        var newNode = new Node(value)
        if (!this.head) {
            this.head = newNode
            this.tail = this.head
        } else {
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }
        this.length++
        return this
    }
    pop() {
        if (!this.head) {
            return undefined
        }
        var remove = this.tail
        if (this.length === 1) {
            this.head = null
            this.tail = null
        }
        else {
            this.tail = remove.prev
            this.tail.next = null
            remove.prev = null
        }
        this.length--

        return remove
    }
    shift() {
        if (!this.head) {
            return undefined
        }
        var oldHead = this.head
        if (this.length === 1) {
            this.head = null
            this.tail = null
        }
        else {
            this.head = oldHead.next
            this.head.prev = null
            oldHead.next = null
        }
        this.length--

        return oldHead
    }
    unshift(value) {
        var newNode = new Node(value)
        var oldHead = this.head
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        }
        else {
            this.head = newNode
            this.head.prev = newNode
            newNode.next = oldHead
            newNode.prev = null

            // OR
            // this.head.prev = newNode
            // newNode.next = this.head
            // this.head = newNode
        }
        this.length++
        return list
    }
    get(index) {
        if (index < 0 || index >= this.length) {
            return null
        }
        var middle = Math.floor(this.length / 2)
        if (index < middle) {
            console.log("counting form beginning")
            let counter = 0
            let current = this.head
            while (counter != index) {
                current = current.next
                counter++
            }
            return current
        }
        if (index >= middle) {
            console.log("counting from end")
            let counter = this.length - 1
            let end = this.tail
            while (counter > index) {
                end = end.prev
                counter--
            }
            return end
        }
    }
    set(index, value){
        var change = this.get(index)

        if(change){
            change.value = value
            return true
        }
        return false
    }
    

}

list = new DoublyLinkedList()

list.push(99)
list.push(105)
list.push(200)
list.push(201)
list.push(400)
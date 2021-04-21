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
    pop(){
        if(!this.head){
            return undefined
        }
        var remove = this.tail
        if(this.length === 1){
            this.head = null 
            this.tail = null
        }
        else{
            this.tail = remove.prev
            this.tail.next = null
            remove.prev = null 
        }
        this.length--

        return remove
    }

}

list = new DoublyLinkedList()

list.push(99)
list.push(105)
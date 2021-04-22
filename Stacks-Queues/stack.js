class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Stack{
    constructor(){
        this.first = null 
        this.last = null 
        this.size = 0
    }
    //insert at the beginning of list
    push(value){
        var newNode = new Node(value)
        if(!this.first){
            this.first = newNode
            this.last = newNode
        }
        else{
            newNode.next = this.first
            this.first = newNode
        }
        this.size++
        return this.size
    }
    //remove first element of list
    pop(){
        if(!this.first){
            return null
        }
        var currentHead = this.first
        this.first = currentHead.next
        this.size--
        if(this.size === 0){
            this.last = null
        }
        return currentHead.value
    }
}

var stack = new Stack()

stack.push(1)
stack.push(2)
stack.push(13)
stack.push(123)

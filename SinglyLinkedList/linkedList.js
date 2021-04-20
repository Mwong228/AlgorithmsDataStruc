class Node {
    constructor(val){
        this.val = val
        this.next = null
    }
}

// var first = new Node("hi")
// first.next = new Node("there")
// first.next.next = new Node("how")

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0
    }
    //insert element at the end
    push(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }
        else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length ++
        return this
    }
    //remove last element
    pop(){
        if(!this.head){
            return undefined
        }
        var current = this.head
        var newTail = current
        while(current.next){
            newTail = current 
            current = current.next 
        }
        this.tail = newTail
        this.tail.next = null
        this.length--
        if(this.length === 0){
            this.head = null
            this.tail = null
        }
        return current
    }
    //remove first element
    shift(){
        if(!this.head){
            return undefined
        }
        var currentHead = this.head
        this.head = currentHead.next
        this.length--
        if(this.length === 0){
            this.head = null
            this.tail = null
        }
        return currentHead
    }
    //add element to the start
    unshift(val){
        var newHead = new Node(val)
        if(!this.head){
            this.head = newHead
            this.tail = this.head
        }
        else{
        newHead.next = this.head
        this.head = newHead
        }
        this.length++
        return this
    }
    //retrive a node by position
    get(index){
        if( index < 0 || index >= this.length){
            return null
        }
        var counter = 0 
        var current = this.head
        while(counter != index){
            current = current.next
            counter++
        }
        return current
    }
    set(index, val){
        var foundNode = this.get(index)
        if(foundNode){
            foundNode.val = val 
            return true
        }
        return false
    }
    insert(index, val){
        if(index < 0 || index >this.length){
            return false
        }
        if(index === 0){
            this.unshift(val)
            return true
        }
        if(index === this.length){
            this.push(val)
            return true
        }
        var newNode = new Node (val)
        var prev = this.get(index -1)
        var temp = prev.next

        prev.next = newNode
        newNode.next = temp
        this.length++
        return true
    }
}

var list = new SinglyLinkedList()
list.push("Hello")
list.push("Goodbye")
list.push("!")
list.push("asd")

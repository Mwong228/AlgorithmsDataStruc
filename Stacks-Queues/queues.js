class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Queue{
    constructor(){
        this.first = null 
        this.last = null
        this.size = 0
    }
    // Adds at the end
    enqueue(value){
        var newNode = new Node(value)
        if(!this.first){
            this.first = newNode
            this.last = newNode
        }
        else{
            this.last.next = newNode
            this.last = newNode
        }
        this.size++

        return this.size
    }
    // Remove from the beginning
    dequeue(){
        if(!this.first){
            return null
        }
        var remove = this.first
        this.first = remove.next
        this.size-- 
        if(this.size === 0){
            this.tail = null
        }

        return remove.value
    }
}

var q = new Queue()

q.enqueue("First")
q.enqueue("Second")
q.enqueue("Third")

//Time complexity
//Insertion O(1) -> add element at the end of list
//Removal O(1) -> remove first element from list
//Searching O(N)
//Access O(N)
class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BST {
    constructor() {
        this.root = null
    }
    insert(value) {
        var newNode = new Node(value)
        if (!this.root) {
            this.root = newNode
            return this
        }
        else {
            var current = this.root
            while (true) {
                if(value === current.value){
                    return undefined
                }
                if (value < current.value) {
                    if (current.left === null) {
                        current.left = newNode
                        return this
                    }
                    else {
                        current = current.left
                    }
                }
                else if (value > current.value) {
                    if (current.right === null) {
                        current.right = newNode
                        return this
                    }
                    else {
                        current = current.right
                    }
                }
            }
        }

    }
    find(value){
        if(!this.root){
            return false
        }
        else{
            var current = this.root
            while(true){
                if(current.value === null){
                    return false
                }
                if(value === current.value){
                    return true
                }
                if(value < current.value){
                    if(current.left === value){
                        return true
                    }
                    else{
                        current = current.left
                    }
                }
                if(value > current.value){
                    if(current.right === value){
                        return true
                    }
                    else{
                        current = current.right
                    }
                }
            }
        }
    }
}

var tree = new BST()
tree.insert(10)
tree.insert(2)
tree.insert(15)
tree.insert(8)
tree.insert(20)

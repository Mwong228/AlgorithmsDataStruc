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
                if (value === current.value) {
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
    find(value) {
        if (!this.root) {
            return false
        }
        var current = this.root
        var found = false
        while (current && !found) {
            if(value < current.value){
                current = current.left
            }
            else if(value > current.value){
                current = current.right
            }
            else{
                found = true
            }
        }
        if(!found){
            return false
        }
        return current
    }
    contains(value){
        if(!this.root){
            return false
        }
        var current = this.root 
        var found = false
        while(current && !found){
            if(value < current.value){
                current = current.left
            }
            else if(value > current.value){
                current = current.right
            }
            else{
                return true
            }
        }
        return false
    }
}

var tree = new BST()
tree.insert(10)
tree.insert(2)
tree.insert(15)
tree.insert(8)
tree.insert(20)

//Time complexity 
//insertion O(logN)
//searching O(logN)
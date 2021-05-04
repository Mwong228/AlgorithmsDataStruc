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
    DFSPostOrder(){
        var data = []
        var current = this.root
        function traverse(node){
            if(node.left){
                traverse(node.left)
            }
            if(node.right){
                traverse(node.right)
            }
            data.push(node.value)
        }
        traverse(current)
        return data
    }
}

var tree = new BST()
tree.insert(10)
tree.insert(6)
tree.insert(15)
tree.insert(3)
tree.insert(8)
tree.insert(20)
class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0
    }
    //insert element at the end
    push(val) {
        var newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        }
        else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++
        return this
    }
    removeDup() {
        if (!this.head){
            return null;
        }
        var current = this.head;
        while (current.next != null) {
            var nextNode = current.next;
            if (current.val == nextNode.val) {
                current.next = current.next.next;
                this.length--
            }
            else {
                current = current.next;
            }
        }
        return list;
    }
}

var list = new SinglyLinkedList()
list.push("1")
list.push("1")
list.push("2")
list.push("3")
list.push("3")
list.push("3")
list.push("3")
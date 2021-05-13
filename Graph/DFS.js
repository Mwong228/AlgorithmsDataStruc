class Graph {
    constructor() {
        this.adjacencyList = {}
    }
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = []
        }
    }
    addEdge(v1, v2){
        this.adjacencyList[v1].push(v2)
        this.adjacencyList[v2].push(v1)
    }
    dfRecursive(start){
        const result = []
        const visited = {}
        const adjacencyList = this.adjacencyList

        function dfs(vertex){
            if(!vertex) return null
            visited[vertex] = true
            result.push(vertex)
            adjacencyList[vertex].forEach(next => {
                if(!visited[next]) return dfs(next)
            })
        }
        dfs(start)
        return result
    }
    dfIterative(start){
        const stack = [start]
        const result = []
        const visited = {}
        let currentVertex
        visited[start] = true

        while(stack.length){
            currentVertex = stack.pop()
            result.push(currentVertex)
            
            this.adjacencyList[currentVertex].forEach(next => {
                if(!visited[next]){
                    visited[next] = true
                    stack.push(next)
                }
            })
        }
    }
    breadthFirst(star){
        const queue = [start]
        const result = []
        const visited = {}
        let currentVertex
        
        while(queue.length){
            currentVertex = queue.shift()
            result.push(currentVertex)

            this.adjacencyList[currentVertex].forEach(next =>{
                if(!visited[next]){
                    visited[next] = true
                    queue.push(next)
                }
            })
        }
        return result
    }


}
var g = new Graph ()
g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")

g.addEdge("A","B")
g.addEdge("A","C")
g.addEdge("B","D")
g.addEdge("C","E")
g.addEdge("D","E")
g.addEdge("D","F")
g.addEdge("E","F")

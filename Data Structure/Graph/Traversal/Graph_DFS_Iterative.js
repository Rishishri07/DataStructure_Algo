/*
    ************ DEPTH FIRST TRAVERSAL (Iterative) ************
1. The function should accept a starting node
2. Create a stack to help use keep track of vertices (use a list/array)
3. Create a list to store the end result, to be returned at the very end
4. Create an object to store visited vertices
5. Add the starting vertex to the stack, and mark it visited
6. While the stack has something in it:
   a. Pop the next vertex from the stack
   b. If that vertex hasn't been visited yet:
   c. Mark it as visited
   d. Add it to the result list
   e. Push all of its neighbors into the stack
7. Retun result array
*/
class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    DFS(start) {
        let result = [];
        let stack = [];
        let visited = {};
        stack.push(start);
        while (stack.length > 0) {
            const vertex = stack.pop();
            if (!visited[vertex]) {
                visited[vertex] = true;
                result.push(vertex);
                stack.push(...this.adjacencyList[vertex]);
            }
        }
        return result;
    }

    addVertex(vertex) {
        this.adjacencyList[vertex] = [];
    }

    addEdge(v1, v2) {
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }
}

let g = new Graph();
g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")
g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B","D")
g.addEdge("C","E")
g.addEdge("D", "E")
g.addEdge("D", "F")
g.addEdge("E","F")
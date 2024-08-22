/*
    ************ DEPTH FIRST TRAVERSAL (Recursive) ************
1. The function should accept a starting node
2. Create a list to store the end result, to be returned at the very end
3. Create an object to store visited vertices
4. Create a helper function which accepts a vertex
    a. The helper function should return early if the vertex is empty
    b. The helper function should place the vertex it accepts into the visited object
    and push that vertex into the result array.
    c. Loop over all of the values in the adjacencyList for that vertex.
    d. If any of those values have not been visited, recursively invoke the helper
    function with that vertex.
*/
class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    DFS(start) {
        let result = [];
        let visited = {};
        const adjacencyList = this.adjacencyList;

        function helper(vertex) {
            if (!vertex) return null;
            visited[vertex] = true;
            result.push(vertex);

            adjacencyList[vertex].forEach((neighbor) => {
                if (!visited[neighbor]) return helper(neighbor);
            });
        }
        helper(start);
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
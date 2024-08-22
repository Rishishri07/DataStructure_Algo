/*
    ************ BREADTH FIRST TRAVERSAL ************
1. This function should accept a starting vertex
2. Create a queue (you can use an array) and place the starting vertex in it
3. Create an array to store the nodes visited
4. Create an object to store nodes visited
5. Mark the starting vertex as visited
6. Loop as long as there is anything in the queue
   a. Remove the first vertex from the queue and push it into the array that stores
   nodes visited.
   b. Loop over each vertex in the adjacency list for the vertex you are visiting.
   c. If it is not inside the object that stores nodes visited, mark it as visited and
   enqueue that vertex.
   d. Once you have finished looping, return the array of visited nodes.
*/
class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    BFS(start) {
        let queue = [start];
        let result = [];
        let visited = {};
        let vertex;
        while (queue.length > 0) {
            vertex = queue.shift();
            if (!visited[vertex]) {
                visited[vertex] = true;
                result.push(vertex);
                queue.push(...this.adjacencyList[vertex]);
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
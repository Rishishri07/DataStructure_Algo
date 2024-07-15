/*
        ********* Add Edge in Graph *************
1. This function should accept two vertices, we can call them vertex1 and vertex2.
2. The function should find in the adjacency list the key of vertex1 and push vertex2 to the array.
3. The function should find in the adjacency list the key of vertex2 and push vertex1 to the array.

{"Tokyo": [], "Dallas": [], "Aspen": []}
g.addEdge("Tokyo", "Dallas")
          ↓
{"Tokyo": [ "Dallas"], "Dallas": [ "Tokyo"], "Aspen" : []}
*/
class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }
}

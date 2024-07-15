/*
        ********* Add Vertex in Graph *************
1. Write a method called addVertex, which accepts a name of a vertex.
2. It should add a key to the adjacency list with the name of the vertex and set its value to be
an empty array
g.addVertex("Tokyo")
     ↓
{"Tokyo": []}
*/
class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        // let vertex = {key: []};
        this.adjacencyList[vertex] = [];
    }
}

let g = new Graph();
g.addVertex('Tokyo');
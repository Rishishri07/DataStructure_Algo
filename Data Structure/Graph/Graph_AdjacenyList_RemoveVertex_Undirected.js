/*
        ********* REMOVING A VERTEX FROM GRAPH *************
• The function should accept a vertex to remove.
• The function should loop as long as there are any other vertices in the adjacency
list for that vertex.
• Inside of the loop, call our removeEdge function with the vertex we are removing
and any values in the adjacency list for that vertex.
• Delete the key in the adjacency list for that vertex.
{"Tokyo": ["Dallas"], "Dallas": ["Tokyo", "Aspen"],"Aspen": ["Dallas"]}
                            ↓
                g.removeEdge("Tokyo", "Dallas")
{"Tokyo": [], "Dallas": ["Aspen"], "Aspen": [ "Dallas"]}
*/
class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    removeVertex(vertex) {
        for (let adjacenctVertex in this.adjacencyList) {
            this.removeEdge(adjacenctVertex, vertex);
        }
        delete this.adjacencyList[vertex];
    }

    removeEdge(vertex1, vertex2) {
        // let indexV1 = this.adjacencyList[vertex1].indexOf(vertex2);
        // this.adjacencyList[vertex1].splice(indexV1, 1);
        // let indexV2 = this.adjacencyList[vertex2].indexOf(vertex1);
        // this.adjacencyList[vertex2].splice(indexV2, 1);
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            v => v !== vertex2
        );
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            v => v !== vertex1
        );
    }
}
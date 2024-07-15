/*
        ********* REMOVING AN EDGE FROM GRAPH *************
• This function should accept two vertices, we'll call them vertex1 and vertex2.
• The function should reassign the key of vertex1 to be an array that does not
contain vertex2.
• The function should reassign the key of vertex2 to be an array that does not
contain vertex1.
{"Tokyo": ["Dallas"], "Dallas": ["Tokyo", "Aspen"], "Aspen": ["Dallas"]}
                            ↓
                g.removeEdge("Tokyo", "Dallas")
{"Tokyo": [], "Dallas": ["Aspen"], "Aspen": [ "Dallas"]}
*/
class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    removeEdge(vertex1, vertex2) {
        let indexV1 = this.adjacencyList[vertex1].indexOf(vertex2);
        this.adjacencyList[vertex1].splice(indexV1, 1);
        let indexV2 = this.adjacencyList[vertex2].indexOf(vertex1);
        this.adjacencyList[vertex2].splice(indexV2, 1);
    }
}

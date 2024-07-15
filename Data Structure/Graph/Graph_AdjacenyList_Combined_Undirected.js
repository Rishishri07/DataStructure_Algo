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

    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }

    addVertex(vertex) {
        // let vertex = {key: []};
        this.adjacencyList[vertex] = [];
    }
}

let g = new Graph();
g.addVertex('Tokyo');
g.addVertex('Dallas');
g.addVertex('Aspen');
g.addVertex('Hong Kong');
g.addVertex('Los Angeles');
g.addEdge("Tokyo", "Dallas");
g.addEdge("Tokyo", "Hong Kong");
g.addEdge("Aspen", "Dallas");
// g.addEdge("Dallas", "Tokyo");
g.addEdge("Dallas", "Hong Kong");
g.addEdge("Hong Kong", "Los Angeles");
g.addEdge("Dallas", "Los Angeles");
/*
    ************** Dijkstra's Pseudocode ***********
1. This function should accept a starting and ending vertex
2. Create an object (we'll call it distances) and set each key to be every vertex in
   the adjacency list with a value of infinity, except for the starting vertex which
   should have a value of 0.
3. After setting a value in the distances object, add each vertex with a priority of
   Infinity to the priority queue, except the starting vertex, which should have a
   priority of 0 because that's where we begin.
4. Create another object called previous and set each key to be every vertex in
   the adjacency list with a value of null
5. Start looping as long as there is anything in the priority queue
   a. dequeue a vertex from the priority queue
   b. If that vertex is the same as the ending vertex - we are done!
   c. Otherwise loop through each value in the adjacency list at that vertex
      i. Calculate the distance to that vertex from the starting vertex.
      ii. If the distance is less than what is currently stored in our distances
      object.
      iii. Update the distances object with new lower distance
      iv. Update the previous object to contain that vertex
      v. Enqueue the vertex with the total distance from the start node
*/
class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(val, priority) {
        this.values.push({val, priority});
        this.sort();
    }

    dequeue() {
        return this.values.shift();
    }

    sort() {
        this.values.sort((a,b) => a.priority - b.priority);
    }
}

class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }
    
    addVertex(v) {
        if (!this.adjacencyList[v]) this.adjacencyList[v] = [];
    }

    addEdge(v1, v2, weight) {
        this.adjacencyList[v1].push({node: v2, weight});
        this.adjacencyList[v2].push({node: v1, weight});
    }

    dijkstra(start, finish) {
        const nodes = new PriorityQueue();
        const distances = {};
        const previous = {};
        let path = [];
        let smallest;
        // Build up intial state
        for (let vertex in this.adjacencyList) {
            if (vertex === start) {
                distances[vertex] = 0;
                nodes.enqueue(vertex, 0);
            } else {
                distances[vertex] = Infinity;
                nodes.enqueue(vertex, Infinity);
            }
            previous[vertex] = null;
        }
        // as long as there is something to visit
        while(nodes.values.length) {
            smallest = nodes.dequeue().val;
            if (smallest === finish) {
                // We are Done
                // Build up path to return at end
                while (previous[smallest]) {
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                break;
            }

            if (smallest || distances[smallest] !== Infinity) {
                for (let neighbor in this.adjacencyList[smallest]) {
                    // find neighboring node
                    let nextNode = this.adjacencyList[smallest][neighbor];
                    // Calculate new distance to neighboring node
                    let candidateDist = distances[smallest] + nextNode.weight;
                    let nextNeighbor = nextNode.node;
                    if (candidateDist < distances[nextNeighbor]) {
                        // Updating new smallest distance to neighbor
                        distances[nextNeighbor] = candidateDist;
                        // Updating previous - How we got to neighbor
                        previous[nextNeighbor] = smallest;
                        // Enqueue in priority queue with new priority
                        nodes.enqueue(nextNeighbor, candidateDist);
                    }
                }
            }
        }
        return path.concat(smallest).reverse();
    }
}

let graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");
graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B","E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge ("E", "F", 1);
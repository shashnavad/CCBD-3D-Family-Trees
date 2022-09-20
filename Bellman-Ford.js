const{ performance } = require('perf_hooks');
class Edge 
{
    constructor() {
        this.src = this.dest = this.weight = 0;
    }
}
class Graph extends Edge
{
    constructor(v, e)
    {
        super();
        this.V = v;
        this.E = e;
        this.edge = Array(e).fill(null);
        for (var i = 0; i < e; ++i) {
            this.edge[i] = new Edge();
        }
    }
    BellmanFord(graph, src)
    {
        var V = graph.V;
        var E = graph.E;
        var dist = Array(V).fill(0);
        for (var i = 0; i < V; ++i) {
            dist[i] = Number.MAX_VALUE;
        }
        dist[src] = 0;
        for (var i = 1; i < V; ++i) {
            for (var j = 0; j < E; ++j) {
                var u = graph.edge[j].src;
                var v = graph.edge[j].dest;
                var weight = graph.edge[j].weight;
                if (dist[u] != Number.MAX_VALUE && dist[u] + weight < dist[v]) {
                    dist[v] = dist[u] + weight;
                }
            }
        }
        for (var j = 0; j < E; ++j) {
            var u = graph.edge[j].src;
            var v = graph.edge[j].dest;
            var weight = graph.edge[j].weight;
            if (dist[u] != Number.MAX_VALUE && dist[u] + weight < dist[v]) {
                console.log("Graph contains negative weight cycle");
                return;
            }
        }
        this.printArr(dist, V, src);
    }
    printArr(dist, V, src)
    {
        console.log("Vertex Distance from source using Bellman-Ford\n");
        for (var i = 0; i < V; ++i) {
            console.log("Vertex " + i + "  Distance from the root " + src + " is given by " + dist[i]);
        }
    }
    main(src)
    {
        // add edge 0-1 
        graph.edge[0].src = 0;
        graph.edge[0].dest = 1;
        graph.edge[0].weight = 0;
        // add edge 0-2 
        graph.edge[1].src = 0;
        graph.edge[1].dest = 2;
        graph.edge[1].weight = 1;
        // add edge 1-2 
        graph.edge[2].src = 1;
        graph.edge[2].dest = 2;
        graph.edge[2].weight = 1;
        // add edge 2-3 
        graph.edge[3].src = 2;
        graph.edge[3].dest = 3;
        graph.edge[3].weight = 0;
        // add edge 2-4 
        graph.edge[4].src = 2;
        graph.edge[4].dest = 4;
        graph.edge[4].weight = 1;
        // add edge 3-4 
        graph.edge[5].src = 3;
        graph.edge[5].dest = 4;
        graph.edge[5].weight = 1;
        // add edge 4-5 
        graph.edge[6].src = 4;
        graph.edge[6].dest = 5;
        graph.edge[6].weight = 0;
        // add edge 4-6 
        graph.edge[7].src = 4;
        graph.edge[7].dest = 6;
        graph.edge[7].weight = 1;
        // add edge 5-6 
        graph.edge[8].src = 5;
        graph.edge[8].dest = 6;
        graph.edge[8].weight = 1;
        // add edge 4-7 
        graph.edge[9].src = 4;
        graph.edge[9].dest = 7;
        graph.edge[9].weight = 1;
        // add edge 5-7 
        graph.edge[10].src = 5;
        graph.edge[10].dest = 7;
        graph.edge[10].weight = 1;

        graph.BellmanFord(graph, src);
    }
}
var V = 8;
var E = 11;
var graph = new Graph(V, E);
var start_time = performance.now();
graph.main(0);
var end_time = performance.now();
var interval = end_time-start_time;
console.log('\nTime taken for execution is given by '+ interval);
console.log('\nThe time complexity of the Bellman-Ford Algorithm is O(E*V) ');

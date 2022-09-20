const{ performance } = require('perf_hooks');
class Node
{
	constructor(dest,wt)
	{
		this.dest = dest;
		this.weight = wt;
	}	
}
let num_vertex = 8;
let edges = new Array(num_vertex);

function _ZeroOneBFS()
{
	for (let i = 0; i < edges.length; i++) {
			edges[i] = [];
		}
}
function addEdge(u,v,wt)
{
	edges[u].push(edges[u].length, new Node(v, wt));
	//edges[v].push(edges[v].length, new Node(u, wt));
}
function udaddEdge(u,v,wt)
{
	edges[u].push(edges[u].length, new Node(v, wt));
	edges[v].push(edges[v].length, new Node(u, wt));
}
function zeroOneBFS(src)
{
		let dist = new Array(num_vertex);
		for (let i = 0; i < num_vertex; i++) {
			dist[i] = Number.MAX_VALUE;
		}
		
		let queue = [];
		dist[src] = 0;
		queue.push(src);
		
		while (queue.length!=0) {
			let v = queue.shift(); //removes and returns the top element
			for (let i = 0; i < edges[v].length; i++) {

				// checking for optimal distance
				if (dist[edges[v][i].dest] > dist[v] + edges[v][i].weight) {
					// update the distance
					dist[edges[v][i].dest] = dist[v] + edges[v][i].weight;
					if (edges[v][i].weight == 0) {
						queue.unshift(edges[v][i].dest); //unshift-adds elements to the beginning
					} else {
						queue.push(edges[v][i].dest); //push adds items to the end of the array
					}
				}
			}
		}
		
		for (let i = 0; i < dist.length; i++) {
			console.log("Vertex " + i + "  Distance from the root " + src + " is given by " + dist[i]);
		}
		return dist;
}
function kzeroOneBFS(src,k)
{
		let dist = new Array(num_vertex);
		for (let i = 0; i < num_vertex; i++) {
			dist[i] = Number.MAX_VALUE;
		}
		
		let queue = [];
		dist[src] = 0;
		queue.push(src);
		
		while (queue.length!=0) {
			let v = queue.shift(); //removes and returns the top element
			for (let i = 0; i < edges[v].length; i++) {

				// checking for optimal distance
				if (dist[edges[v][i].dest] > dist[v] + edges[v][i].weight) {
					// update the distance
					dist[edges[v][i].dest] = dist[v] + edges[v][i].weight;
					if (edges[v][i].weight == 0) {
						queue.unshift(edges[v][i].dest); //unshift-adds elements to the beginning
					} else {
						queue.push(edges[v][i].dest); //push adds items to the end of the array
					}
				}
			}
		}
		
		for (let i = 0; i < dist.length; i++) {
			if(dist[i] <= k)console.log("Vertex " + i + "  Distance from the given source " + src + " is given by " + dist[i]);
		}
		return dist;
}
_ZeroOneBFS();
addEdge(0, 1, 0);
addEdge(0, 2, 1);
addEdge(1, 2, 1);
addEdge(2, 3, 0);
addEdge(2, 4, 1);
addEdge(3, 4, 1);
addEdge(4, 5, 0);
addEdge(4, 6, 1);
addEdge(5, 6, 1);
addEdge(4, 7, 1);
addEdge(5, 7, 1);
let src = 0;
let dist1 = new Array(num_vertex);
console.log("Distance from the root to all the vertices using 0-1 BFS\n");
var start_time = performance.now();
dist1 = zeroOneBFS(src);
var end_time = performance.now();
var interval = end_time-start_time;
console.log('\nTime taken for execution is given by '+ interval);
console.log('\nThe time complexity of the 0-1BFS algorithm is O(E+V) ');
_ZeroOneBFS();
udaddEdge(0, 1, 0);
udaddEdge(0, 2, 1);
udaddEdge(1, 2, 1);
udaddEdge(2, 3, 0);
udaddEdge(2, 4, 1);
udaddEdge(3, 4, 1);
udaddEdge(4, 5, 0);
udaddEdge(4, 6, 1);
udaddEdge(5, 6, 1);
udaddEdge(4, 7, 1);
udaddEdge(5, 7, 1);
let srck = 4;
let distk = new Array(num_vertex);
let k = 1;
console.log("\nDistance from the source to all the vertices within a radius of distance k using 0-1 BFS where k is " + k);
console.log("Since all nodes at a radius of distance k must be printed we convert the directed graph to an undirected graph\n");
distk = kzeroOneBFS(srck,k);


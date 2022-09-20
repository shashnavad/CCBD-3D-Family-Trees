# CCBD-3D-Family-Trees
A family tree is a special type of data structure as each node can have more than one parent. We must be 
able to handle all types of relationships.

Suppose you want to share the user stories with only certain people who are close to you such as those in your 
kth circle.

The given problem is to find the distance from the source to all vertices within a radius of distance k
keeping in mind the the nature of the tree.

Algorithms for single source shortest path

	1.Djikstra's algorithm(cannot be used since there is no priority between edges)
	2.Warshall's algorithm(input to the algorithm is in adjacency matrix format)
	3.Bellman Ford algorithm
	4.0-1 BFS

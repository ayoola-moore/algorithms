from typing import List

def get_vertex_with_min_distance(distances: List[int], visited: set):
	current_min_distance = float('inf')
	print(distances)
	vertex = None
 
	for vertex_idx, distance in enumerate(distances):
		if vertex_idx in visited:
			continue
		
		if distance <= current_min_distance:
			vertex = vertex_idx
			current_min_distance = distance
	# print(vertex, current_min_distance)
	return vertex, current_min_distance

def dijkstra(start: int, edges: List[int]):
	number_of_vertices = len(edges)
    
	min_distances = [float('inf') for _ in range(number_of_vertices)]

	min_distances[start] = 0
 
	visited = set()

	while len(visited) != number_of_vertices:
		vertex, current_min_distance = get_vertex_with_min_distance(min_distances, visited)
  
		if current_min_distance == float('inf'):
			min_distances = -1
			break
		
		visited.add(vertex)
		
		for edge in edges[vertex]:
			destination, distance_to_desitination = edge

			if destination in visited:
				continue

			new_path_distance = current_min_distance + distance_to_desitination
			current_destination_distance = min_distances[destination]

			if new_path_distance < current_destination_distance:
				min_distances[destination] = new_path_distance
		
	return list(map(lambda x: -1 if x == float('inf') else x, min_distances))

print(
    dijkstra(
    8, 
	[
  [
    [1, 4],
    [7, 11]
  ],
  [
    [0, 4],
    [2, 11],
    [7, 14]
  ],
  [
    [1, 11],
    [3, 10],
    [5, 7],
    [8, 5]
  ],
  [
    [2, 10],
    [4, 12],
    [5, 17]
  ],
  [
    [3, 12],
    [5, 13],
    [6, 3]
  ],
  [
    [2, 7],
    [3, 17],
    [4, 13],
    [6, 5]
  ],
  [
    [4, 3],
    [5, 6],
    [7, 4],
    [9, 8]
  ],
  [
    [0, 11],
    [1, 14],
    [6, 4],
    [8, 10]
  ],
  [
    [2, 5],
    [6, 9],
    [7, 10]
  ],
  []
]
 )
)
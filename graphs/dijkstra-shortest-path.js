function getVertexWithMinDistance(minDistances, visited) {
	let vertex = null, currentMinDistance = Infinity

	console.log(minDistances)
	for (let vertexId = 0; vertexId < minDistances.length; vertexId++) {
		const distance = minDistances[vertexId]

		if (visited.includes(vertexId)) continue

		if (distance <= currentMinDistance) {
			vertex = vertexId
			currentMinDistance = distance
		}
	}
	console.log([vertex, currentMinDistance])
	return [vertex, currentMinDistance]
}

function dijkstra(start, edges) {
	let numberOfVertices = edges.length

	let minDistances = new Array(numberOfVertices).fill(Infinity)
	minDistances[start] = 0

	visited = []

	while (visited.length !== numberOfVertices) {
		const [vertex, currentMinDistance] = getVertexWithMinDistance(minDistances, visited)
		console.log(vertex, currentMinDistance)

		visited.push(vertex)

		for (const edge of edges) {
			const [destination, distanceToDestination] = edge
			// if (visited.includes(destination)) continue

			const newPathDistance = currentMinDistance + distanceToDestination
			const currentDestinationDistance = minDistances[destination]

			if (newPathDistance < currentDestinationDistance) {
				minDistances[destination] = newPathDistance
			}
		}

	}

	return minDistances.map((distance) => {
		if (distance === Infinity) return -1
		return distance
	})
}

console.log(
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


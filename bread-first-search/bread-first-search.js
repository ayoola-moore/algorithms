const nodes = [this]


while (nodes.lengthj) {
	const currentNode = nodes.shift()
	array.push(currentNode.name)
	nodes.push(...currentNode.children)
}

return array
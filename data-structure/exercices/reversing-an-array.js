// A, B, C, D -> A, B, D, C -> A, D, B, C -> D, A, B, C      // 3
// D, A, B, C -> D, A, C, B -> D, C, A, B ->                 // 2
// D, C, A, B -> D, C, B, A                                  // 1

const reverseArrayInPlace = (array, iterNum, initEndpoint) => {
	if (iterNum === 0) return array
	
	const currIter = iterNum || array.length-1
	const endpointI = array.length-1 - currIter
	const currEndpoint = (initEndpoint >= 0 ? initEndpoint : array.length - 1)
	
	if (currEndpoint !== endpointI) {
		const tempVal = array[currEndpoint - 1]
		
		array[currEndpoint - 1] = array[currEndpoint]
		array[currEndpoint] = tempVal
		
		return reverseArrayInPlace(array, currIter, currEndpoint - 1)
	}
	
	return reverseArrayInPlace(array, currIter - 1)
}

const arr = ['A', 'B', 'C', 'D']
reverseArrayInPlace(arr);
console.log(arr)


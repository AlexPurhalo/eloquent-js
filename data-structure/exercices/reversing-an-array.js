const reverseArray = (arr, newArr, iterNum) => {
	// const currI = iterNum || arr.length
	// console.log(currI)
	// const updatedArr = newArr || []
	//
	// if (currI === 0) return updatedArr
	//
	// updatedArr.unshift(arr[currI])
	//
	// return reverseArray(arr, updatedArr, currI - 1)
}

// A, B, C, D -> A, B, D, C -> A, D, B, C -> D, A, B, C      // 3
// D, A, B, C -> D, A, C, B -> D, C, A, B ->                 // 2
// D, C, A, B -> D, C, B, A                                  // 1

const reverseArrayInPlace = (array, iterNum) => {
	if (iterNum === 0) return array
	
	const currIter = iterNum || array.length-1
	
	for (let i = array.length-1; i >= array.length - currIter; i--) {
		const tempVal = array[i - 1]
		array[i - 1] = array[i]
		array[i] = tempVal
	}
	
	return reverseArrayInPlace(array, currIter - 1)
}

const arr = ['A', 'B', 'C', 'D']
reverseArrayInPlace(arr);
console.log(arr)


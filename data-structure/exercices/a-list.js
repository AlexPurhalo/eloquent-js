const arrayToList = (arr, iterPar, nestedObjPar, initObjPar) => {
	const iterNum = iterPar | 0
	const initObj = initObjPar || { val: arr[iterNum], rest: null }
	
	let nestedObj
	
	if (nestedObjPar) {
		nestedObjPar.rest = { val: arr[iterNum], rest: null }
		nestedObj = nestedObjPar.rest
	} else {
		nestedObj = initObj
	}
	
	if (iterNum === arr.length - 1) return initObj
	
	return arrayToList(arr, iterNum + 1, nestedObj, initObj)
}

console.log(arrayToList(['A', 'B', 'C']))
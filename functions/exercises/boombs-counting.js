function countBs(workStr, intrChar, iParam, bsParam) {
	var bsCount = bsParam || 0, i = iParam || 0
	var isBChar = workStr.charAt(i) === intrChar
	var isIterated = i === workStr.length
	
	if (isBChar) (bsCount++)
	if (isIterated) return "Bs count: " + bsCount
	i++
	
	return countBs(workStr, intrChar, i, bsCount)
}

console.log(
	countBs('hello bombbb', 'h')
)

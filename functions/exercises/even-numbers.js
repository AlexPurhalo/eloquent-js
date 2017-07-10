// firstly let's print 0 or 1
function isEven(num) {
	var isZero = num === 0, isOne = num === 1
	
	if (isZero) return true
	if (isOne) return false
	
	return isEven(num - 2)
}

console.log('is 50 even? ' + isEven(50))
console.log('is 75 even? ' + isEven(75))
// console.log('is -1 even? ' + isEven(-1))
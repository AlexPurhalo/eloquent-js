const range = (firVal, secVal, optionalPar) => {
	const stepWidth = optionalPar === 0 && 1 || optionalPar < 0 && optionalPar * -1 || optionalPar || 1
	const startVal = Math.min(firVal, secVal), finalVal = Math.max(firVal, secVal)
	
	const numsArr = []
	
	if (optionalPar >= 0) {
		for (let i = startVal; i <= finalVal; i += stepWidth) numsArr.push(i)
	} else {
		for (let i = finalVal; i >= startVal; i -= stepWidth) numsArr.push(i)
	}
	
	return numsArr
}

console.log(range(7, 2, -2))

// TODO: rename
function	power(base,	exponent)	{
	var isZeroExponent = exponent === 0
	return isZeroExponent ? 1 : base	*	power(base,	exponent - 1) // base * base * base
}

console.log(power(3, 3)) // 3 * 3 * 3
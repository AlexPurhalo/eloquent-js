module.exports = function phi(table) {
	var n11 = table[3], n00 = table[0],
		n10 = table[1], n01 = table[2]
	
	return ((n11 * n00) - (n10 * n01)) /
		Math.sqrt(
			(n10 + n11) *
			(n00 + n01) *
			(n01 + n11) *
			(n00 + n10)
		)
}

// console.log(phi([76, 9, 4, 1]));
// // → 0.068599434
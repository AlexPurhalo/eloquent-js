var boardHeight = 8, rowWidth = 5

for (var i = 0; i < boardHeight; i++) {
	var rowForEven = ' #', rowForOdd = '# ', row = ''
	
	var isEven = i % 2 === 0
	
	for (var j = 0; j < rowWidth; j++)
		row += (isEven ? rowForEven : rowForOdd)
	
	console.log(row)
}
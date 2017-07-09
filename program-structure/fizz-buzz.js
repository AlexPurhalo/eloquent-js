for (var i = 1; i <= 100; i++) {
	var output = ''
	var isDivBy3 = i % 3 === 0, isDivBy5 = i % 5 === 0
	
	isDivBy3 && (output += 'Fizz')
	isDivBy5 && (output += 'Buzz')
	
	console.log(output || i)
}

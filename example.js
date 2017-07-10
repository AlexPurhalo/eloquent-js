// function reverse(arr) {
// 	var newArr = [];
//
// 	for (var i = 0; i < arr.length; i++) {
// 		newArr.unshift(arr[i])
// 	}
//
// 	return newArr
// }

const arr = [1, 4, 'Hello']
// console.log(reverse(arr))

const reverse = array => array.reduce(
	(acc, item, i) => [...acc, array[array.length - 1 - i]],
	[]
)

console.log(reverse(arr))

// group by
// chunk
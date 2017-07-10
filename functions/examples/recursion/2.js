function	findSolution(target)	{
	function	find(start,	history)	{
		var isFinalHistory = start ===	target
		var isWrongHistory = start	>	target
		
		if (isFinalHistory) return	history
		if	(isWrongHistory) return	null;
		
		return	find(start	+	5,	"("	+	history	+	"	+	5)")	||
			find(start	*	3,	"("	+	history	+	"	*	3)");
	}
	
	return	find(1,	"1");
}
console.log(findSolution(13)) // "(((1 * 3) + 5) + 5)"

// n | start | history              | condition
// 1 |     1 | "1"                  |      true
// 2 |     6 | "(1 + 5)"            |      true
// 3 |     11| "((1 + 5) + 5)"      |      true
// 4 |     16| "(((1 + 5) + 5) + 5)"| isWrongHistory
// 5 |     33| "(((1 + 5) + 5) * 3)"| isWrongHistory
// 6 |     18| "((1 + 5) * 3)"      | isWrongHistory
// 7 |      3| "(1 *3)"             |      true
// 8 |      8| "((1 * 3) + 5)"      |      true
// 9 |     13| "(((1 * 3) + 5) + 5)"| isFinalHistory


// find(1,	"1")
//  find(6,	"(1	+	5)")
//    find(11,	"((1	+	5)	+	5)")
//      find(16,	"(((1	+	5)	+	5)	+	5)")
//        too	big
//      find(33,	"(((1	+	5)	+	5)	*	3)")
//        too	big
//      find(18,	"((1	+	5)	*	3)")
//        too	big
//      find(3,	"(1	*	3)")
//        find(8,	"((1	*	3)	+	5)")
//          find(13,	"(((1	*	3)	+	5)	+	5)")
//            found!
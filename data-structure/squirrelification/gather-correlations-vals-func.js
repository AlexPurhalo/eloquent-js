// JSON data import
const JOURNAL = require('./journal-arr');

// Functions import
const phi = require('./find-phi-func')
const { hasEvent, tableFor } = require('./create-table-func')

function gatherCorrelations(journal) {
	var phis = {};
	for (var entry = 0; entry < journal.length; entry++) {
		var events = journal[entry].events;
		for (var i = 0; i < events.length; i++) {
			var event = events[i];
			if (!(event in phis))
				phis[event] = phi(tableFor(event, journal));
		}
	}
	return phis;
}

var correlations = gatherCorrelations(JOURNAL);

// correlations from -0.1 to 0.1
for (var event in correlations) {
	var correlation = correlations[event];
	if (correlation > 0.1 || correlation < -0.1)
		console.log(event + ": " + correlation);
}

for (var i = 0; i < JOURNAL.length; i++) {
	var entry = JOURNAL[i];
	if (hasEvent("peanuts", entry)
		&& !hasEvent("brushed teeth", entry))
		entry.events.push("peanuts teeth");
	
	console.log(entry.events)
}

console.log(tableFor("teeth", JOURNAL))
console.log(phi(tableFor("peanuts teeth", JOURNAL)));
// → 1
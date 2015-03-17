var Parse = require('../lib/parse');

var p = new Parse({'cwd':'/Users/jfulton/Projects/github/gpj/nfl-spiral2/src/TestCloudCode'});

p.list(function(err, output) {
	console.log(err);
	console.log(output);
	process.exit(0);
});


node-parse-commands
===================

Run Parse CLI methods from the a node module.

__*Warning*__: this currently requires you have the Parse CLI installed locally.





Installation
------------
package.json:

```
  "dependencies": {
    "parse-commands": "juxtinteractive/node-parse-commands"
  }
```

Usage
------

```
var Parse = require('parse-commands');

var p = new Parse({'cwd':'/PATH/TO/PARSE/PROJECT'});

p.list(function(err, output) {
	if (err) {
		console.log(err);
		return process.exit(1);
	}
	console.log(output);
	return process.exit(0);
});
```
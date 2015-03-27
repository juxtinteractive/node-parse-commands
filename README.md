node-parse-commands
===================

Run Parse CLI methods from the a node module.


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


### Available Commands

- `cliversion([args,] callback)`
- `add([args,] callback)`
- `default([args,] callback)`
- `deploy([args,] callback)`
- `develop([args,] callback)`
- `jssdk([args,] callback)`
- `list([args,] callback)`
- `log([args,] callback)`
- `new([args,] callback)`
- `releases([args,] callback)`
- `rollback([args,] callback)`
- `symbols([args,] callback)`

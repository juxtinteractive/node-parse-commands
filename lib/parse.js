var spawn = require('superspawn').spawn;


var parseCommands = [
	'cliversion',
	'add',
	'default',
	'deploy',
	'develop',
	//'generate express',
	//'help',
	'jssdk',
	'list',
	'log',
	'new',
	'releases',
	'rollback',
	'symbols'
	//'update'
];



function Parse(config) {
	this.config = config || {};

	// Add a method for each parse command
	// TODO: this should really be on the prototype...
	parseCommands.map(function(cmd) {
		this[cmd] = this._run.bind(this, cmd);
	}, this);
}


Parse.prototype._run = 	function _run (cmd, args, cb) {
	// TODO:
	// if args is defined but not an array, throw an error

	if (!!args && typeof args === 'function') {
		cb = args;
		args = undefined;
	}

	var parseArgs = [].concat(cmd, args).filter(function(el) {
		return el !== undefined;
	});

	return spawn('parse', parseArgs, this.config, cb);
};



module.exports = Parse;

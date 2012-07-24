
var fs = require('fs'),
    path = require('path'),
    spawn = require('child_process').spawn,
    async = require('flatiron').common.async,
    haibu = require('../../haibu');

var useraccounts = exports;

var _spawnOptions = haibu.getSpawnOptions;
haibu.getSpawnOptions = function getSpawnOptions(target) {
  var options = _spawnOptions.apply(this, arguments);
  options.env.USER = haibu.config.get('useraccounts:prefix') + target.user;
  options.env.HOME = path.join(haibu.config.get('directories:apps'), target.user);
  options.env.TEMP = path.join(options.env.HOME, '.tmp');
  return options;
}

useraccounts.name = 'useraccounts';

useraccounts.argv = function (repo) {
  var user = repo.app.user;
  return { argv: ['--plugin',
        'setuid',
        '--setuid',
        haibu.config.get('useraccounts:prefix') + user] };
}

useraccounts.attach = function (options) {
  if (process.getuid() !== 0) {
    throw new Error('useraccounts plugin requires admin privileges.');
  }
  
  haibu.config.set('useraccounts:prefix', 'haibu-');
};
//Uses ES5 because we don't transpile this file

require('babel-register')();
//register babel to transpile

//disable webpack features that Mocha can't understand
require.extensions['.css'] = function() {};

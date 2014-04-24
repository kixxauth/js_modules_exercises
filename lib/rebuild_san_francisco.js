var path = require('path');
var cache = require('module').Module._cache;


exports.rebuild = function () {
  var modulePath = path.join(__dirname, 'san_francisco.js');
  return require(modulePath);
};

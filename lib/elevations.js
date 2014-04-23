var Hash = require('../hashish');

var ELEVATIONS = {
  'Chicago': 597,
  'Boston': 19,
  'Denver': 5280
}

Hash(require('./places'))
  .map(function (val) { return ELEVATIONS[val]; })
  .forEach(function (elevation, key) { exports[key] = elevation; })

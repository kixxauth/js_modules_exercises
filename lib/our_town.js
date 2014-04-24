exports.say = function () {
  return computeName();
};

exports.parts = function () {
  return ['Saratoga', 'Springs', 'NY'];
};

var computeName = require('./').computeName;

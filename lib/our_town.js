var computeName = require('./').computeName;

exports.say = function () {
  return computeName();
};

exports.parts = function () {
  return ['Saratoga', 'Springs', 'NY'];
};

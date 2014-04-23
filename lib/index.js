var parts = require('./our_town').parts();

exports.computeName = function () {
  return parts.join(' ');
};

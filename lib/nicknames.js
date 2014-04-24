var NICKNAMES = {
  chicago: 'windy city',
  boston: 'beantown',
  denver: 'mile high city'
};

Object.keys(require('./places')).forEach(function (city) {
  exports[city] = {nickname: NICKNAMES[city]};
});

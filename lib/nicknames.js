var NICKNAMES = {
  chicago: 'beantown',
  boston: 'mile high city',
  denver: 'windy city'
};

Object.keys(require('./places')).forEach(function (city) {
  exports[city] = {nickname: NICKNAMES[city]};
});

'use strict';

var Suite = require('benchmarked');
var suite = new Suite({
  result: false,
  fixtures: 'fixtures/*basic.js',
  add: 'libs/*.js',
  cwd: __dirname
});

suite.run();

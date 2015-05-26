var assert = require('assert');
var ac = require('../index.js');

assert.equal(typeof ac, 'object');
assert.equal(typeof ac.import, 'function');

console.log("# ac.import imports a list of words into memory");
ac.import(function (words) {
  console.log("words.txt had " + words.length + " words in it!");
  assert.equal(words.length, 235887);
});

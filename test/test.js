var assert = require('assert');
var ac = require('../index.js');

assert.equal(typeof ac, 'object');
assert.equal(typeof ac.import, 'function');

console.log("# ac.import imports a list of words into memory");
ac.import(function (err, words) {
  console.log("words.txt had " + words.length + " words in it!");
  assert.equal(words.length, 235887);
});

console.log("# attempt to invoke ac.import without a valid callback");
var error = ac.import('string');
// console.log(error);
assert.equal(error.message, 'callback argument MUST be a function');

console.log('# ac.findWord finds a string in words array');
ac.import(function() {
  ac.findWord('awes', function (err, found) {
    assert.equal(found.length, 4);
  });
});

console.log('# ac.stats tracks which words/string were searched for');
ac.import(function() {
  ac.stats('rubies', function (err, stats) {
    console.log(stats);
    assert.equal(stats['rubies'].length, 1);
    ac.stats('rubies', function (err, stats) {
      console.log(stats);
      assert.equal(stats['rubies'].length, 2);
    });
  });
});

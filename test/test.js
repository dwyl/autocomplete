var assert = require('assert');
var ac = require('../index.js');
var testindex = 1; // see: https://testanything.org/tap-version-13-specification.html
assert.equal(typeof ac, 'object');
assert.equal(typeof ac.import, 'function');

console.log("# ac.import imports a list of words into memory");
ac.import(function (err, words) {
  console.log("ok " + testindex++ + " words.txt had " + words.length + " words in it!");
  assert.equal(words.length, 235887);
});

console.log("# attempt to invoke ac.import without a valid callback");
var error = ac.import('string');
// console.log(error);
assert.equal(error.message, 'callback argument MUST be a function');

console.log('# ac.findWord finds a string in words array');
ac.import(function () {
  ac.findWord('awes', function (err, found) {
    assert.equal(found.length, 4);
    console.log("ok " + testindex++ + " Search for awes found: ", found);
  });
});

console.log('# ac.stats tracks which words/string were searched for');
ac.import(function () {
  ac.stats('awesome', function (err, stats) {
    // console.log(stats);
    assert.equal(stats['awesome'].length, 1);
    ac.stats('awesome', function (err, stats) {
      // console.log(stats);
      assert.equal(stats['awesome'].length, 2);
      console.log("ok " + testindex++ + " stats (search count) for awesome: ", stats['awesome'].length);
    });
  });
});

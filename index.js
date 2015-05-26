var fs = require('fs');
var ac = {};

ac.import = function (callback) {
  if (!callback || typeof callback !== 'function') {
    return new Error('callback argument MUST be a function')
  }
  var filename = __dirname + '/words.txt';
  fs.readFile(filename, 'utf8', function (err, data) {
    ac.words = data.split('\n');
    return callback(err, ac.words);
  });
}

ac.stats = function (word, callback) {
  if (!ac.searches) {
    ac.searches = {};
  }
  if (!ac.searches[word]) {
    ac.searches[word] = [];
  }
  ac.searches[word].push(new Date().getTime());
  callback(null, ac.searches);
}

ac.findWord = function (word, callback) {
  // who wants to volunteer to implement the method?
  var found = [];
  for (var i = 0; i < ac.words.length; i++) {
    if (ac.words[i].search(word) === 0) {
      found.push(ac.words[i]);
    }
  }
  return callback(null, found);
}



module.exports = ac;

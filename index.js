var fs = require('fs');
var ac = {};

ac.import = function (callback) {
  if (!callback || typeof callback !== 'function') {
    return new Error('callback argument MUST be a function')
  }
  var filename = __dirname + '/words.txt';
  fs.readFile(filename, 'utf8', function (err, data) {
    if (err) {
      console.log(err);
    }
    ac.words = data.split('\n');
    return callback(ac.words);
  });
}

ac.findWord = function (word, callback) {
  // who wants to volunteer to implement the method?
  var found = [];
  for (var i = 0; i < ac.words.length; i++){
    if(ac.words[i].search(word) === 0){
      found.push(ac.words[i]);
    }
  }
  return callback(null, found);
}


module.exports = ac;

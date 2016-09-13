var fs = require('fs');
var file = process.argv[2];
var es = require('event-stream');
var output = fs.createWriteStream('imdb.txt');
var through2 = require('through2');

var readStream = fs.createReadStream(file)
  .pipe(es.split('\n'))
  .pipe(through2(function (chunk, encoding, done){
    var movieTitle = chunk.slice(32);
    this.push(movieTitle + '\n');
    done()
  }))
  .on('data', function(data) {
    output.write(data);
  })
  .on('end', function() {
    console.log('Finished Converting File');
  })

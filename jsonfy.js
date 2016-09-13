var fs = require('fs');
var file = process.argv[2];
var es = require('event-stream');
var output = fs.createWriteStream('imdb.json');
var through2 = require('through2');
var uuid = require('uuid');
var collection = [];

var readStream = fs.createReadStream(file).setEncoding('utf8')
  .pipe(es.split('\n'))
  .pipe(through2.obj(function (chunk, encoding, done){
    if (chunk.length !== 0) {
      var id = uuid.v1();
      var year = chunk.match(/\d+(?!\s|\w)/)[0];
      var title = chunk.split(/\s["("]/)[0];
      var obj = {
        id: id,
        year: year,
        title: title
      }
      this.push(JSON.stringify(obj));
    }
    done()
  }))
  .on('data', function(data) {
    collection.push(data)
  })
  .on('end', function() {
    output.write(JSON.stringify(collection));
  })

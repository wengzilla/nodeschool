var fs = require('fs')

var count = function(err, buf) {
  console.log(buf.toString().split('\n').length - 1)
}

fs.readFile(process.argv[2], count)
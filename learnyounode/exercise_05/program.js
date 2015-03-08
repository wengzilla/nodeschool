var fs = require('fs')

var dir = process.argv[2]
var extension = process.argv[3]

fs.readdir(dir, function(err, data){
  for(var i = 0; i < data.length; i++) {
    if(data[i].match(new RegExp("^.*\." + extension + "$", "g")))
      console.log(data[i])
  }
})
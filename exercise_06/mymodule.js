var fs = require('fs')
var path = require('path')

module.exports = function(dir, extension, callback) {
  var results = []

  fs.readdir(dir, function(err, data){
    if (err) return callback(err)

    for(var i = 0; i < data.length; i++) {
      if(path.extname(data[i]) === "." + extension)
        results.push(data[i])
    }

    callback(err, results)
  })
}

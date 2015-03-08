http = require('http')

var collected = []
var success = 0

var sync_gets = function(url, index, collected) {
  http.get(url, function(response) {
    var buffer = ""
    response.on("data", function(data) {
      buffer += data
    })
    response.on('error', function(data) {
      console.error(data)
    })
    response.on('end', function(data) {
      success++
      collected[index] = buffer
      if (success === 3) {
        collected.forEach(function(data){ console.log(data) })
      }
    })
  })
}

sync_gets(process.argv[2], 0, collected)
sync_gets(process.argv[3], 1, collected)
sync_gets(process.argv[4], 2, collected)
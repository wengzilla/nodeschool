http = require('http')

var collected = ""

http.get(process.argv[2], function(response){
  response.setEncoding("utf8")

  response.on("data", function(data) {
    collected += data
  })
  response.on('error', function(data) {
    console.error(data)
  })
  response.on('end', function(data) {
    console.log(collected.length)
    console.log(collected)
  })
})
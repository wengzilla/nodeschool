var http = require('http')
var map = require('through2-map')

var server = http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'text' })

  if(req.method != "POST") return res.end("Needs a POST request")

  req.pipe(map(function (chunk) {
    return chunk.toString().toUpperCase()
  })).pipe(res)
})

server.listen(Number(process.argv[2]))
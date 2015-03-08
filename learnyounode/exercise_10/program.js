var strftime = require('strftime')
var net = require('net')

var server = net.createServer(function (socket) {
  if(socket) {
    timestamp = strftime('%Y-%m-%d %H:%M', Date.now())
    socket.end(timestamp + "\n")
  }
})

server.listen(+process.argv[2])
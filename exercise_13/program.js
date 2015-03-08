http = require('http')
url = require('url')
strftime = require('strftime')

var parsetime = function(date) {
  return {
    "hour": date.getHours(),
    "minute": date.getMinutes(),
    "second": date.getSeconds() 
  }
}

var unixtime = function(date) {
  return {
    "unixtime": date.valueOf()
  }
}

var server = http.createServer(function(req, res) {
  var parsed_url = url.parse(req.url, true)
  var date = new Date(parsed_url.query.iso)
  var response

  if(parsed_url.pathname === "/api/parsetime")
    response = parsetime(date)
  else if(parsed_url.pathname === "/api/unixtime")
    response = unixtime(date)

  if(response) {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(response))
  } else {
    res.writeHead(404)
    res.end()
  }
})

server.listen(Number(process.argv[2]))
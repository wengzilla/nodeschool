var through = require('through2');

var write = function(buffer, encoding, next) {
  this.push(buffer.toString().toUpperCase());
  next();
}

var transform = through(write);
process.stdin.pipe(transform).pipe(process.stdout);
var fs = require('fs');
var filename = process.argv[2];
var buf = fs.readFileSync(filename);

console.log((buf.toString().match(/\n/g) || []).length)
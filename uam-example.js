#!/usr/bin/env node

var port = process.env.PORT || 8888
  , http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('I am running locally!\n');
}).listen(port, '127.0.0.1');

console.log('Server running at http://127.0.0.1:' + port + '/');

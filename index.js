const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
	res.write("Hello from Node");
	res.end();
}).listen(3000);

console.log('Server started listening on port 3000');

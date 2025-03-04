const http = require('http');

const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
  } else {
    res.statusCode = 405;
    res.setHeader('Allow', 'GET');
    res.end('Method Not Allowed\n');
  }
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});

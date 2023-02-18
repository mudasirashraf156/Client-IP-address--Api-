const http = require('http');

const server = http.createServer((req, res) => {
  const ipAddress = req.socket.remoteAddress;
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(`Your IP address is: ${ipAddress}`);
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
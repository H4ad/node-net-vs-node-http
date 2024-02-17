const startNet = async () => {
  const net = await import('node:net');

  const server = net.createServer({ keepAlive: true }, connection => {
    connection.end(`HTTP/1.1 200 OK\r\nContent-Type: text/plain\r\nContent-Length:5\r\nConnection: keep-alive\r\nDate: ${new Date().toGMTString()}\r\nKeep-Alive: timeout=5\r\n\r\nHello`);
  });

  server.listen(3000);
  console.log(`Listening at http://localhost:3000`);
};

const startHttp = async () => {
  const http = await import('node:http');

  const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    res.statusCode = 200;
    res.end('Hello');
  });

  server.listen(3001);
  console.log(`Listening at http://localhost:3001`);
};

if (process.env.TEST_MODULE === 'net') {
  startNet();
} else {
  startHttp();
}
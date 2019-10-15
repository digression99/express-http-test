const http = require('http');

const server = http.createServer((req, res) => {
  console.log('request : ');
  console.log(req);

  res.write('hi');
  res.end();
});

server.listen(4000);

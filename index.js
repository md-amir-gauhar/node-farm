const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  const pathName = req.url;

  if (pathName === '/' || pathName === '/overview') {
    res.end("This is the Overview Page");
  } else if (pathName === '/product') {
    res.end("This is the Product page")
  } else {
    res.writeHead(404, {
      'Content-type': 'text/html',
      'my-own-header': 'hello-world'
    })
    res.end('<h1>Page not found!</h1>')
  }
});

server.listen(8000, '127.0.0.1', () => {
  console.log('Listening to request on port 8000');
});


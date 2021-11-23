const http = require('http');
const url = require('url');
const fs = require('fs');

const tempOverview = fs.readFileSync(`${__dirname}/template/template-overview.html`, 'utf-8');
const tempCard = fs.readFileSync(`${__dirname}/template/template-card.html`, 'utf-8');
const tempProduct = fs.readFileSync(`${__dirname}/template/template-product.html`, 'utf-8');

const data = fs.readFileSync(`${__dirname}/data/data.json`, 'utf-8');
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
  const pathName = req.url;

  // Overview Page
  if (pathName === '/' || pathName === '/overview') {



    res.end(tempOverview);

    // Product Page
  } else if (pathName === '/product') {
    res.end("This is the Product page")

    //API
  } else if (pathName === '/api') {
    res.writeHead(200, {
      'Content-type': 'application/json'
    });
    res.end(data);

    // Not Found
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


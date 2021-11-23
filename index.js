const fs = require('fs');
const http = require('http');

///////////////////////////////////////
// Files

// Blocking, Synchronus way
// const text = fs.readFileSync('./txt/input.txt', 'utf-8');

// console.log(text);

// const outText = `This is output text : ${text}.\nCreated on ${Date.now()}`;

// fs.writeFileSync('./txt/output.txt', outText)

// Non-blocking, asynchronus way
// fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
//   if (err) return console.log("EROORRR! 💥");
//   fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
//     console.log(data2);
//     fs.writeFile('./txt/final.txt', `${data1}\n${data2}`, 'utf-8', err => {
//       console.log('WRITINGGG!!!');
//     })
//   })
// })


///////////////////////////////////////
// Server

const server = http.createServer((req, res) => {
  res.end("Hello from the server!");
});

server.listen(8000, '127.0.0.1', () => {
  console.log('Listening to request on port 8000');
});


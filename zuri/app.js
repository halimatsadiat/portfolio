const http = require('http')
const fs = require('fs')

http.createServer(function(req, res){
    if(req.url == '/') {
        const readStream = fs.createReadStream('./home.html');
        res.writeHead(200,{'Content-type': 'text/html'});
        readStream.pipe(res);

    }

    if (req.url == '/about.html') {
        const readStream = fs.createReadStream('./about.html');
        res.writeHead(200,{'Content-type': 'text/html'});
        readStream.pipe(res);
    }

    if (req.url == '/contact.html') {
        const readStream = fs.createReadStream('./contact.html');
        res.writeHead(200,{'Content-type': 'text/html'});
        readStream.pipe(res);
    }

    if(req.url == '/home.html') {
        const readStream = fs.createReadStream('./home.html');
        res.writeHead(200,{'Content-type': 'text/html'});
        readStream.pipe(res);

    }
   /* res.writeHead(200, {'content-type': 'text/html'});
    const html = fs.readFileSync('home.html');
    res.end(html);*/
}).listen(3000,() => {
    console.log('running on 3000');
})
/*const http = require('http');
const fs = require('fs');


const port = 3000;

const server = http.createServer((req, res) => {
  if(req.url === '/') {
      const htmlFile = 'home.html';
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      fs.createReadStream(htmlFile).pipe(res);

  }
});

server.listen(port, () => {
  console.log(`The serer is running at port number::${port}`);
});*/
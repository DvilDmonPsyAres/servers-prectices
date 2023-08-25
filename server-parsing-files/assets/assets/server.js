const http = require('http');
const fs = require("fs");

const server = http.createServer((req, res) => {
  // Your code here
  const fileContents = fs.readFileSync('./index.html', 'utf-8');
  const assetsCss = fs.readFileSync('./assets/css/application.css')
  const assetsImages = fs.readFileSync('./assets/images/dog.jpg')

  console.log(`${req.method} ${req.url}`)

  if(req.url.split('/')[1] === 'static'){
    if(req.url.split('/')[2] === 'css' && req.url.split('/')[3].startsWith('application')) {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/css');
      return res.end(assetsCss)
    }

    if(req.url.split('/')[2] === 'images' && req.url.split('/')[3].startsWith('dog')) {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'image/jpeg');
      return res.end(assetsImages);
    }

  }


  if(req.method === 'GET' ) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    return res.end(fileContents);
  }

});

const port = 5000;

server.listen(port, () => console.log('Server is listening on port', port));

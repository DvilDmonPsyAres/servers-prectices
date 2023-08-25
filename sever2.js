const http = require('http');
const server = http.createServer((req, res) => {

    // Call the req.on method to listen to the data event. Concatenate the data received to a string representing the body of the request getting put together.
    let reqBody = '';
    req.on('data', (data) => {
    reqBody += data;
    });
    //   The end event on the request object will be triggered once the entire server finishes receiving the request body. You can log the entire request body inside of the req.on method listening to the end event.
    req.on('end', () => {
    console.log(reqBody);
    });
    // To create a route handler for a GET request with a URL path of / that sends a plain text, 'Splash Page', with a status code of 200:
    if (req.method === 'GET' && req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    return res.end('Splash Page');
    }
    if (req.method === 'POST' && req.url === '/cat') {
    res.statusCode = 201;
    res.setHeader('Content-Type', 'text/plain');
    return res.end('Created a Cat!');
    }

});

const port = 5000;

server.listen(port, () => console.log('server is listen in port: ', port));

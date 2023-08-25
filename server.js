// server.js
const http = require('http');

const server = http.createServer((req, res) => {
  // ...
  //console.log(req);
  //console.log(res);

//   res.statusCode = 500;
//   res.setHeader("Content-Type", "text/css");
//   res.write('Hello');
//   res.write(' ');
//   res.write('World');
//   res.end('!');


//   You can also choose not to pass in any arguments into the end method to finish sending the response.

//     For example, to send a response with the status code of 200 without any body:

//     const server = http.createServer((req, res) => {
//     res.status = 200;
//     res.end();
//     });

// To read a data packet and add to the body of the request in http, you have to listen for the data event on the req object. The data event will be triggered whenever a data packet is received. Then, you need to add the contents of the data packet to the content compiled from data packets that were already received.

// Call the req.on method to listen to the data event. Concatenate the data received to a string representing the body of the request getting put together.


  let reqBody = '';
  req.on('data', (data) => {
    reqBody += data;
  });


//   The end event on the request object will be triggered once the entire server finishes receiving the request body. You can log the entire request body inside of the req.on method listening to the end event.

  req.on('end', () => {
    console.log(reqBody);
  });
});

const port = 5000;

server.listen(port, () => console.log('Server is listening on port', port));

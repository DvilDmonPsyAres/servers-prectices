const { sendFormPage } = require("./routes");
const { parseBody } = require("./parse-body");
let server;

const http = require('http');

server = http.createServer((req, res) => {

    let reqBody = '';
    req.on('data', (data) => {
        reqBody += data;
    })

    req.on('end', () => {
        reqBody = parseBody(reqBody);
        sendFormPage();
    });
});

const port = 5000;

server.listen(port, () => console.log('Successfully started the server on port 5000'));

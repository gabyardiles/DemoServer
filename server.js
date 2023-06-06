// const http = require('http');

// function answerRequest(request, response) {
//     response.end('Hola mundo')
// }

// let server = http.createServer(answerRequest)
// server.listen(3000)


const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/saludo', function(req, res) {
    res.send(`Hola ${ req.query.name}`);
});


app.post('/', function(req, res) {
    res.send(`Hola ${ req.body.name}`);
});


app.listen(3000)
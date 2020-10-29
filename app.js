var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(express.json());
app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({extended: false}))

var messages = [
    {name:'Tim', message:'Hi'},
    {name:'Mabel', message:'Hello'}
]

app.get('/messages',(req, res) => {
    res.send(messages);
})

app.post('/messages', (req,res) => {
    var message = {
        name: req.body.name,
        message: req.body.message
    };
    messages.push(message);
    res.status(200).send(message);
})

var server = app.listen(3000, () => {
    console.log('Listening on port ', server.address().port);
})
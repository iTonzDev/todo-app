var app = require('express')();
var bodyParser = require('body-parser');
var path = __dirname + '/views/';

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.sendFile(path + 'index.html');
});

app.post('/add', function(req, res) {
    console.log('add');
    console.log('todoName : ' + req.body.todoName);
    res.json({ 'todoName': req.body.todoName });
});

app.put('/update', function(req, res) {
    console.log('update');
});

app.use('*', function(req, res) {
    res.send('Page Not Found!!');
});

app.listen(7777, function() {
    console.log('Starting node.js on port 7777');
});
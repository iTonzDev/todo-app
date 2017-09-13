var app = require('express')();
var bodyParser = require('body-parser');
var path = __dirname + '/views/';

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var result = {
    "todolist": [{
        "id": 1,
        "name": "test1"
    }, {
        "id": 2,
        "name": "test2"
    }]
};
var id = result.todolist.length;

app.get('/', function(req, res) {
    res.sendFile(path + 'index.html');
});

app.get('/todo-list', function(req, res) {
    //res.send or res.json
    //console.log('id : ' + id);
    res.json(result);
});

app.post('/add', function(req, res) {
    //console.log('add');
    //console.log('todoName : ' + req.body.todoName);
    var paramOut = {
        "todolist": [{
            "id": (++id),
            "name": req.body.todoName
        }]
    }
    res.json(paramOut);
});

app.put('/update', function(req, res) {
    console.log('update');
});

app.put('/history', function(req, res) {
    console.log('history');
});

app.use('*', function(req, res) {
    //res.send('Page Not Found!!');
    res.sendFile(path + '404.html');
});

app.listen(7777, function() {
    console.log('Starting node.js on port 7777');
});
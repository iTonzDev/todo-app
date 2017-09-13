var app = require('express')();
var bodyParser = require('body-parser');
var path = __dirname + '/views/';
var mysql = require('mysql')
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'todo_app'
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var id = 0;

app.get('/', function(req, res) {
    res.sendFile(path + 'index.html');
});

app.get('/todo-list', function(req, res) {
    //res.send or res.json
    var paramOut = {};
    connection.query('select * from todo order by id desc', function(err, rows, fields) {
        if (err) throw err;
        //console.log(rows);
        paramOut.todolist = rows;
        id = rows.length;
        res.json(paramOut);
    });
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
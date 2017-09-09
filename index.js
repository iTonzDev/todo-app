var app = require('express')();
var port = process.env.PORT || 7777;

app.get('/', function(req, res) {
    res.send('<h1>Hello Node.js</h1>');
});

app.listen(port, function() {
    console.log('Starting node.js on port ' + port);
});
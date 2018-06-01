var mysql       = require('mysql');

var connection  = mysql.createConnection({
    host        : 'localhost',
    user        : 'root',
    password    : '',
    database    : 'sba'
});

connection.connect(function (err) {
    console.log("test");
    if(!err) {
        console.log("Database is connected ... ");
    }
    else {
        console.log("Error connecting Database ... ")
    }
});

connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results[0].solution);
});

connection.end();
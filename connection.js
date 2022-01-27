var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'pass@123',
    database: 'notes',
    port: 3306
});

connection.connect();

module.exports = connection;
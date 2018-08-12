// Setup the code to connect Node to MySQL.
var mysql = require("mysql");

// Create object with mysql connection data
var sqlConnect = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'burger_db'
});

// Connect to specified server using object data provided.
sqlConnect.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log('Connected as id ' + sqlConnect.threadId);
});

// Export the connection.
module.exports = sqlConnect;
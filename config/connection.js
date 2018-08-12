// Setup the code to connect Node to MySQL.
var mysql = require("mysql");
var connection;


if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'burger_db'
    });
};

// Connect to specified server using object data provided.
sqlConnect.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log('Connected as id ' + sqlConnect.threadId);
});

// Export the connection.
module.exports = sqlConnect;
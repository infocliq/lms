// Tables migration
var mysql = require('mysql');
var con = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    connectionLimit: 10
});

// Create users table 
con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "CREATE TABLE users (userId INT NOT NULL AUTO_INCREMENT PRIMARY KEY, firstName VARCHAR(255), lastName VARCHAR(255), gender VARCHAR(6), email VARCHAR(255), password VARCHAR(255), phoneNumber VARCHAR(255), admin BOOLEAN NOT NULL DEFAULT 0, CONSTRAINT contact_name_unique UNIQUE (email, phoneNumber))";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table created");
    });
});
// Insert user table data
con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO users (firstName, lastName, gender, email, password, phoneNumber, admin) VALUES ('Kabilraj', 'Selvanantham', 'male', 'kabilraj050@gmail.com', '$2b$10$L6dVIMiGiWLT.33/.IGMQuesCJAYl2ePM8h.4HjsNvY020hQcUogC', '0776213839', 1)";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Record inserted");
    });
});
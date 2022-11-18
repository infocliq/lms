require("dotenv").config();
const express = require("express");
const fileUpload = require('express-fileupload');
const app = express();
 
const cors = require('cors');
const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,            //access-control-allow-credentials:true
  optionSuccessStatus: 200
}
app.use(cors(corsOptions));

const userRouter = require("./api/users/user.router");
const categoryRouter = require("./api/categories/categories.router");

app.use(express.json());

app.use(
  fileUpload({
    limits: {
      fileSize: 5000000,
    },
    abortOnLimit: true,
  })
);

app.use(express.static('storage/images'))

app.use("/api/users", userRouter);
app.use("/api/category", categoryRouter);

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log("server up and running on PORT :", port + ' 🛠');
});



// ==================================================Table Migration and Seed=====================================================

// // Tables migration
var mysql = require('mysql');
var con = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  connectionLimit: 10
});

// // CREATE TABLES
// // Create users table
// con.connect(function (err) {
//   if (err) throw err;
//   console.log("Connected!");
//   var sql = "CREATE TABLE users (userId INT NOT NULL AUTO_INCREMENT PRIMARY KEY, userName VARCHAR(255), email VARCHAR(255), password VARCHAR(255), profileImg VARCHAR(255), admin BOOLEAN NOT NULL DEFAULT 0, CONSTRAINT contact_name_unique UNIQUE (email))";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Table created");
//   });
// });

//Create category table
// con.connect(function (err) {
//   if (err) throw err;
//   console.log("Connected!");
//   var sql = "CREATE TABLE category (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, categoryName VARCHAR(255), status BOOLEAN NOT NULL DEFAULT 1)";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Table created");
//   });
// });






// // DATA SEEDERS
// // Insert user table data
// con.connect(function (err) {
//   if (err) throw err;
//   console.log("Connected!");
//   var sql = "INSERT INTO users (userName, email, password, profileImg, admin) VALUES ('Planning','lms@infocliq.net', '$2b$10$L6dVIMiGiWLT.33/.IGMQuesCJAYl2ePM8h.4HjsNvY020hQcUogC', 'https://infocliq.net/assets/img/icons/favicon.png', 1)";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Record inserted");
//   });
// });
require("dotenv").config();
const express = require("express");
const fileUpload = require('express-fileupload');
const app = express();

const cors = require('cors');
const corsOptions = {
  origin: process.env.CORS_URLS,
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  credentials: true,            //access-control-allow-credentials:true
  optionSuccessStatus: 200
}
app.use(cors(corsOptions));

const userRouter = require("./api/users/user.router");
const categoryRouter = require("./api/categories/categories.router");
const departmentRoter = require("./api/departments/departments.router");
const letterRoter = require("./api/letters/letters.router");

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
app.use("/api/departments", departmentRoter);
app.use("/api/letters", letterRoter);

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
//   var sql = "CREATE TABLE users (userId VARCHAR(255) NOT NULL PRIMARY KEY, userName VARCHAR(255), email VARCHAR(255), department VARCHAR(255), password VARCHAR(255), profileImg VARCHAR(255), status BOOLEAN NOT NULL DEFAULT true, admin BOOLEAN NOT NULL DEFAULT false, createdAt date, updatedAt date, CONSTRAINT contact_name_unique UNIQUE (email, userName))";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Table created");
//   });
// });

//Create category table
// con.connect(function (err) {
//   if (err) throw err;
//   console.log("Connected!");
//   var sql = "CREATE TABLE category (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, categoryName VARCHAR(255), status BOOLEAN NOT NULL DEFAULT 1, isPrimary BOOLEAN NOT NULL DEFAULT 0, createdAt date, updatedAt date)";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Table created");
//   });
// });


//Create department table
// con.connect(function (err) {
//   if (err) throw err;
//   console.log("Connected!");
//   var sql = "CREATE TABLE department (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, departmentName VARCHAR(255), createdAt date, updatedAt date)";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Table created");
//   });
// });

//Create letters table
// con.connect(function (err) {
//   if (err) throw err;
//   console.log("Connected!");
//   var sql = "CREATE TABLE letters (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, issuedDate DATE, registerPostId VARCHAR(255), letterFrom VARCHAR(255), subject VARCHAR(255), department VARCHAR(255), status VARCHAR(255), priority VARCHAR(255), description VARCHAR(255), createdAt DATE, updatedAt DATE)";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Table created");
//   });
// });


//Create reply table
// con.connect(function (err) {
//   if (err) throw err;
//   console.log("Connected!");
//   var sql = "CREATE TABLE replies (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, letterId INT, reply VARCHAR(255), status VARCHAR(255), user VARCHAR(255), department VARCHAR(255), createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP)";
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
//   var sql = "INSERT INTO users (userName, email, department, password, profileImg, status, admin) VALUES ('Admin','lms@infocliq.net', 'superAdmin', '$2b$10$L6dVIMiGiWLT.33/.IGMQuesCJAYl2ePM8h.4HjsNvY020hQcUogC', 'https://infocliq.net/assets/img/icons/favicon.png', true, true)";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Record inserted");
//   });
// });
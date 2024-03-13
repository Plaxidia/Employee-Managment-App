import mysql from 'mysql2';
const pool =mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password:'',
  database: 'employment_management_app',

}).promise();


// CREATE DATABASE employment_management_app;
// USE employment_management_app;

// CREATE TABLE employees (
//   id integer PRIMARY KEY AUTO_INCREMENT,
//   first_name VARCHAR(255) NOT NULL,
//   last_name VARCHAR(255) NOT NULL,
//   email VARCHAR(100),
//   gender VARCHAR(100),
//   job_title VARCHAR(100),
//   department VARCHAR(100),

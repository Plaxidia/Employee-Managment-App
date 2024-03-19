import mysql from 'mysql2';

// import dotenv from 'dotenv';
// dotenv.config();

const pool =mysql.createPool({
  host:'127.0.0.1', //process.env.MYSQL_HOST,//'127.0.0.1',
  user:'root',// process.env.MYSQL_USER,//'root',
  password:'', //process.env.MYSQL_PASSWORD,//'',
  database: 'employment_management_app',//process.env.MYSQL_DATABASE,//'employment_management_app',
  
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0

}).promise();

async function getEmployees(){
  const [rows] = await pool.query("SELECT * FROM employees")
  return rows
}
const employees =await getEmployees()
console.log(employees)

async function getEmployee(id){
  const [rows] = await pool.query(
    "SELECT * FROM employees WHERE id = ?",[id])
  return rows[0]
}
const employee = await getEmployee(1)

console.log(employee)

async function createEmployee(first_name, last_name, email, gender, job_title, department) {
  const result = await pool.query("INSERT INTO employees (first_name, last_name, email, gender, job_title, department) VALUES (?, ?, ?, ?, ?, ?)", [first_name, last_name, email, gender, job_title, department]);
  return result;
}

const result = await createEmployee('test', 'test', 'test@test.com', 'male', 'Engineer', 'IT');
console.log(result);

















//const result = await pool.query("SELECT * FROM employees")

//const rows =result[0]
//console.log(result)



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

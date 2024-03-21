import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import { getEmployees,getEmployee,createEmployee, deleteEmployee } from './database.js';

const PORT = process.env.PORT || 8080;

const app = express();
let employees =[];// A temporary in-memory "database" until you integrate a real database

// Enable CORS

app.use(cors());
app.use(bodyParser.json());

//get all employees
app.get('/employees', async (req, res) => {
  const employees =await getEmployees();
  res.send(employees);
});

//Get a single employee
app.get('/employee/:id', async (req, res) => {
  const id = req.params.id;
  const employee =await getEmployee(id);
  res.send(employee);
});


// Add a new employee
app.post('/employee/add', async (req, res) => {
  const { firstName, lastName, email, gender, job_title, department } = req.body;
  if (!firstName || !lastName ||! email|| ! gender|| ! job_title ||! department) {
      res.status(400).send('Missing firstName or lastName');
  }
  
   const newEmployee = await getEmployee(firstName, lastName,  email, gender, job_title, department);
   res.status(201).send(newEmployee);
});

app.put('/employees/update/:id', (req, res) => {
  const employee = employees.find(emp => emp.id === parseInt(req.params.id));
  if (!employee) {
      return res.status(404).send('Employee not found');
  }
  const { firstName, lastName,  email, gender, job_title, department } = req.body;
  employee.firstName = firstName || employee.firstName;
  employee.lastName = lastName || employee.lastName;
  employee.email = email || employee.email;
  employee.gender = gender || employee.gender;
  employee.job_title =job_title || employee.job_title;
  employee.department = department || employee.department;
  res.json(employee);
});

// Delete an employee
app.delete('/employee/:id', async (req, res) => {
  const index =  await employees.deleteEmployee(req.params.id); // look into this tomorrow 
  //const index = employees.findIndex(emp => emp.id === parseInt(req.params.id));
  if (index === -1) {
      return res.status(404).send('Employee not found');
  }
  employees.splice(index, 1);
  res.status(204).send();
});
// app.use ((err,req,res,next)=>{
//   console.log(err.stack)
//   res.status(500).send("Something broke" )
// })

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// );
// INSERT INTO employees (first_name, last_name, email, gender,job_title, department) 
// VALUES ('John', 'Doe', 'john.doe@example.com','male','Software Engineer', 'Engineering');
// VALUES ('Jane', 'Smith', 'jane.smith@example.com', 'male', 'Marketing Manager', 'Marketing');

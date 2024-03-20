import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
 import { getEmployee,getEmployees,createEmployee } from './database.js';
const PORT = process.env.PORT || 3004;

const app = express();
let employees =[];// A temporary in-memory "database" until you integrate a real database

// Enable CORS

app.use(cors());
app.use(bodyParser.json());

//Get a single employee
app.get('/employees/:id', async (req, res) => {
  // const employee = employees.find(emp => emp.id === parseInt(req.params.id));
  // if (!employee) {
  //     return res.status(404).send('Employee not found');
  // }
  // res.json(employee);
  const employees =await getEmployees();
  res.send(employees);
});
// Add a new employee
app.post('/employees', (req, res) => {
  const { firstName, lastName } = req.body;
  if (!firstName || !lastName) {
      return res.status(400).send('Missing firstName or lastName');
  }
  const newEmployee = { id: employees.length + 1, firstName, lastName };
  employees.push(newEmployee);
  return res.status(202).json(newEmployee);
});

// Update an employee
app.put('/employees/update/:id', (req, res) => {
  const employee = employees.find(emp => emp.id === parseInt(req.params.id));
  if (!employee) {
      return res.status(404).send('Employee not found');
  }
  const { firstName, lastName } = req.body;
  employee.firstName = firstName || employee.firstName;
  employee.lastName = lastName || employee.lastName;
  res.json(employee);
});

// Delete an employee
app.delete('/employees/:id', (req, res) => {
  const index = employees.findIndex(emp => emp.id === parseInt(req.params.id));
  if (index === -1) {
      return res.status(404).send('Employee not found');
  }
  employees.splice(index, 1);
  res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// );
// INSERT INTO employees (first_name, last_name, email, gender,job_title, department) 
// VALUES ('John', 'Doe', 'john.doe@example.com','male','Software Engineer', 'Engineering');
// VALUES ('Jane', 'Smith', 'jane.smith@example.com', 'male', 'Marketing Manager', 'Marketing');

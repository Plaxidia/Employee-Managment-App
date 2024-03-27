import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import { getEmployees,getEmployee,createEmployee,deleteEmployee,updateEmployee} from './database.js';
  
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
  if (!employees ){
    res.status(400).send('No employees found');
  }

});

//Get a single employee
app.get('/employee/:id', async (req, res) => {
  const id = req.params.id;
  const employee =await getEmployee(id);
  res.send(employee);
  if (!employee ){
    res.status(400).send('Employee with this id does not exist');
  }
});

// Add a new employee
app.post('/employee/add', async (req, res) => {
  const { firstName, lastName, email, gender, job_title, department } = req.body;
  if (!firstName || !lastName ||! email|| ! gender|| ! job_title ||! department) {
      res.status(400).send('Missing firstName or lastName');
      return; // Don't proceed if there are missing fields
  }
    const newEmployee = await createEmployee(firstName, lastName, email, gender, job_title, department);
    res.status(201).send(newEmployee);
});

// update employee
app.put('/employees/update/:id', async (req, res) => {
  const id = req.params.id;
  const { first_name, last_name, email, gender, job_title, department } = req.body;
  
  try {
      const updatedEmployee = await updateEmployee(id, first_name, last_name, email, gender, job_title, department);
      res.status(204).send("Employee updated successfully");
  } catch (error) {
      console.error('Error updating employee:', error);
      res.status(500).send('An error occurred while updating employee');
  }
});

// Delete an employee
app.delete('/employee/delete/:id', async (req, res) => {
  const  id =  (req.params.id); // look into this tomorrow 
  const existingEmployee = await getEmployee(id);
  //const index = employees.findIndex(emp => emp.id === parseInt(req.params.id));
  if (!existingEmployee) {
      return res.status(404).send('Employee not found');
  }
  await deleteEmployee(id);
  res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// INSERT INTO employees (first_name, last_name, email, gender,job_title, department) 
// VALUES ('John', 'Doe', 'john.doe@example.com','male','Software Engineer', 'Engineering');
// VALUES ('Jane', 'Smith', 'jane.smith@example.com', 'male', 'Marketing Manager', 'Marketing');

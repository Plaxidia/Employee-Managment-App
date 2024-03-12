import { Express } from "express";
const express = require('express');

// const bodyParser = require('body-parser');
// const cors = require('cors');
// const axios = require('axios');

const PORT = process.env.PORT || 3001;

const app = express();
let employees =[];// A temporary in-memory "database" until you integrate a real database

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

// app.get("/api", (req, res) => {
//   res.json({ message: "Hello from server!" });
// });

// Enable CORS

app.use(cors());
app.use(bodyParser.json());

// Get all tasks
//app.get('/api/tasks', (req, res) => {
//    res.json(tasks);
//});

//Get a single employee
app.get('/employees/:id', async (req, res) => {
  
      const employee = employees.find(emp => emp.id === parseInt(req.params.id));
      res.json(employee);
  if  (!employee) {
    return res.status(404).send('employee not found');
  }
});

// Add a new employee
app.post('/employees/:id', (req, res) => {
    const {fistName , fastName} = req.body;
    if(!firstName || !lastName) {
      return res.status(400).send('Missing fistName or lastName');
    
    }
    const newEmployee = { id: employees.length + 1, fistName , lastName };
    employees.push(newEmployee);
    //res.json(newEmployee);
    return res.status(202).send(newEmployee);
});

// Update a task
app.put('/employees/update/:id', (req, res) => {
    const employee = employees.find(emp => emp.id === parseInt(req.params.id));
    res.json(employee);
    
    if (!employee) {
      return res.status(404).send({  'employee not found' });
        res.json(updatedTask);
    } 
    const {fistName , fastName} = req.body;
    employee.firstName = fistName ||employee.fastName;
    employee.lastName = lastName || employee,lastName;
    res.json(employee);
});

// Delete a task
app.delete('/employees/:id', (req, res) => {
    //const taskId = req.params.id;
    const index = employees.findIndex((emp) => emp.id === parseInt(req.params.id);

    if (index === -1) {
      return res.status(404).send({  'employee not found' });
      
    } 
    employees.splice(index, 1);
    res.status(204).send();
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
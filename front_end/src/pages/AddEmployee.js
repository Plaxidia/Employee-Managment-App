import React, {  useState } from "react";
//import Modal from 'react-bootstrap/Modal';
import { useNavigate } from "react-router-dom";
import { Box, Button } from "@mui/material";
import Card from '@mui/material/Card';
import { Link } from "react-router-dom";
import CardContent from '@mui/material/CardContent';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
//import { useHistory } from 'react-router-dom'; // Import useHistory hook from React Router

export default function AddEmployee (props ){

  const navigate = useNavigate();

  const [name, setName] = useState('');
           const [age, setAge] = useState('');
           const [position, setPosition] = useState('');
           //const history = useHistory(); // Initialize useHistory hook
         
           const handleSubmit = (e) => {
             e.preventDefault();
             // Here you can add logic to submit the employee data, for example, send it to a backend server
             const employeeData = {
               name: name,
               age: age,
               position: position
             };
             console.log("Submitted:", employeeData);
             // Reset form fields after submission
             setName('');
             setAge('');
             setPosition('');
            };
             

           const handleCancel = () => {
            // Reset form fields
            setName('');
            setAge('');
            setPosition('');
            // Navigate back to the home page
            navigate('/');
          };
    return(
      <div>

      <Box sx={{ flexGrow: 1, 
        marginTop: 4 }}>
       <AppBar
         position="static"
         sx={{ backgroundColor: "grey", color: "white" }}
         >
         <Toolbar>
           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
             Employee Managmment App
           </Typography>
         </Toolbar>
       </AppBar>
     </Box>
        
          <Link to="/">Go Back</Link>
            <Box>
 
               <Button onClick={() => navigate(-1)}> Back
               </Button>
               <form onSubmit={handleSubmit}>
                 <div>
                   <label>Name:</label>
                   <input
                     type="text"
                     value={name}
                     onChange={(e) => setName(e.target.value)}
                     required
                   />
                 </div>
                 <div>
                   <label>Age:</label>
                   <input
                     type="number"
                     value={age}
                     onChange={(e) => setAge(e.target.value)}
                     required
                   />
                 </div>
                 <div>
                   <label>Position:</label>
                   <input
                     type="text"
                     value={position}
                     onChange={(e) => setPosition(e.target.value)}
                     required
                   />
                 </div>
                 <Button type="submit">Add Employee</Button>
                 <Button type="button" onClick={handleCancel}>Cancel</Button>
               </form>    
        </Box>
        
       
        <Card 
        sx={{ 
          marginTop: 4,
          
          
          position:"static",
            backgroundColor: "White", 
            color: "grey" 
        }}>
        <CardContent  >


          <Typography variant="h5" component="div">
            
          </Typography>
          <Typography color="text.secondary">
            
          </Typography>
          <Typography color="text.secondary">
            
          </Typography>
        </CardContent>
        
        <Button type="submit">Add Employee</Button>
        <Button type="button" onClick={handleCancel}>Cancel</Button>
        
      </Card>
      </div>
    )
}
// const[name, setName]= useState( ' ');
    // const[last_name, setLastName]= useState( ' ');
    // const[email, setEmail]= useState( ' ');
    // const[gender, setGender]= useState( ' ');
    // const[job_title, setJobtitle]= useState( ' ');
    // const[department, setDepartment]= useState( ' ');
   
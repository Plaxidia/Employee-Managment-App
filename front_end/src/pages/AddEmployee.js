import React, {useEffect } from "react";
//import Modal from 'react-bootstrap/Modal';
import { useNavigate } from "react-router-dom";
import { Box, Button,  } from "@mui/material";
import Card from '@mui/material/Card';

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import TextField from '@mui/material/TextField';
export default function AddEmployee (props ){

  useEffect(() => {
    // Disable scrolling when the component mounts
    document.body.style.overflow = "hidden";
    // Re-enable scrolling when the component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
   }, []);

  const navigate = useNavigate();

  const handleCancel = () => {
            // // Navigate back to the home page
            navigate('/');
  };
 
    return(
      <div>

      <Box sx={{ 
        flexGrow: 1, 
         }}>
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
<Card 
        sx={{ 
          marginTop: 4,
          marginLeft:"28%",
          borderColor:"black", 
          position:"static",
            backgroundColor: "White", 
            color: "grey", 
            maxWidth:620,
            
        }}>
          <Box sx={{ 
        flexGrow: 1, 
        marginTop: 0}}>
       <AppBar
         position="static"
         sx={{ backgroundColor: "lightgrey", color: "white" }}
         >
         <Toolbar>
           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
             Add Employee 
           </Typography>
           <Button sx={{
            color:'white',
            background: "grey",
            cursor: "pointer",
                              "&:hover": {
                                color: "",
                                background: "#e6e2f0",
                              },
           }}
           onClick={() => navigate(-1)}> Back
               </Button>
         </Toolbar>
       </AppBar>
     </Box>

  <Box >
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        '& > :not(style)': { m: 1 },
      }}
    >
      <TextField
          id="standard-multiline-flexible"
          label="First Name"
          multiline
          maxRows={8}
          variant="standard"
        />
      
       <TextField
          id="standard-multiline-flexible"
          label="Last Name"
          multiline
          maxRows={8}
          variant="standard"
        />
     </Box>
     <Box
     sx={{
      display: 'flex',
      alignItems: 'center',
      '& > :not(style)': { m: 1 },
    }}
     >
      <TextField
          id="standard-multiline-flexible"
          label="Email"
          //multiline
          maxRows={1}
          variant="standard"
        />
     </Box>

     <Box
     sx={{
      display: 'flex',
      alignItems: 'center',
      '& > :not(style)': { m: 1 },
    }}
     >
      <TextField
          id="standard-multiline-flexible"
          label="Gender"
          //multiline
          maxRows={1}
          variant="standard"
        />
     </Box>
     <Box
     sx={{
      display: 'flex',
      alignItems: 'center',
      '& > :not(style)': { m: 1 },
    }}
     >
      <TextField
          id="standard-multiline-flexible"
          label="Job Title"
          multiline
          maxRows={8}
          variant="standard"
        />
        <TextField
          id="standard-multiline-flexible"
          label="Department"
          multiline
          maxRows={8}
          variant="standard"
        />
     </Box>
     <Box
     sx={{
      '& > :not(style)': { m: 1 },
      position: 'relative',
          bottom: 0,
          right: 0,
          display: 'flex',
          justifyContent: 'flex-end',
          padding: '8px',
    }}
     >
    <Button 
      sx={{
        color:'white',
            background: "grey",
            cursor: "pointer",
                              "&:hover": {
                                color: "",
                                background: "#e6e2f0",
                              }
                            }}type="submit">
          Add Employee
      </Button>
    <Button sx={{
      color:'white',
      background: "grey",
      cursor: "pointer",
                        "&:hover": {
                          color: "",
                          background: "#e6e2f0",
                        },
    }} 
    type="button" onClick={handleCancel}>
    Cancel
    </Button>

    </Box >
    
  </Box>
      
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
   
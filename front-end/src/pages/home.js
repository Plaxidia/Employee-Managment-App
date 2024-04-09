//import Box from "@mui/material/Box";
//import * as React from "react";
//import { Button } from "@mui/material";
//import Card from "@mui/material/Card";
// import Paper from "@mui/material/Paper";
// import InputBase from "@mui/material/InputBase";
// import IconButton from "@mui/material/IconButton";
// import SearchIcon from "@mui/icons-material/Search";
// //import background from "../pngs/background.png";

import axios from 'axios';
import React,{useEffect, useState }from "react";
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';

function Home() {

  // Styles for the table
  const useStyles = makeStyles({
    table: {
      minWidth: 650,
      border: '1px solid black', // Add border style here
    },
  });
  

    const classes = useStyles();
    const [rows, setRows] = useState([]); // State to store fetched data
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await axios.get('http://localhost:8080/employees'); // Replace with your backend endpoint
          setRows(res.data); // Set the fetched data to the state
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);
  
    return (
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>First Name</TableCell>
              <TableCell align="right">Last Name</TableCell>
              <TableCell align="right">Gender</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Job Title</TableCell>
              <TableCell align="right">Department</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={index}>
                <TableCell align="right">{row.First_Name}</TableCell>
                <TableCell align="right">{row.Last_Name}</TableCell>
                <TableCell align="right">{row.Gender}</TableCell>
                <TableCell align="right">{row.Email}</TableCell>
                <TableCell align="right">{row.Job_title}</TableCell>
                <TableCell align="right">{row.Department}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
  
export default Home;












/* <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: '100%',
            
            marginTop: '0px',
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search an employee"
            inputProps={{ "aria-label": "search google maps" }}
          />
          <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper> */
//   flexGrow: 1,
        //   background: `url(${background})`,
        //   backgroundSize: "cover",
        //   minHeight: "100vh",
        //   position: "relative", // Add position: relative to Box component
    //}}>

    /* <div
          className="Text-on-display"
          style={{
            color: "white",
            fontSize: 30,
            padding: "70px 0",
            position: "absolute", 
            top: "50%",
            left: "35%", 

            transform: "translate(-50%, -50%)", 
          }}
        >
          <h7 style ={{ fontSize:18, color :'#0080FF', marginBotton: 2}}>
            "Streamline Your HR Processes with our Employee Management Website. 
            Effortlessly Organize, Track, and Update Employee Information for Maximum Efficiency."
            </h7>
          
          <h2>The Advanced Way to Manage Your Employees</h2>
          
        </div> */
        
        /* <Button
            sx={{
              width: "20%",
              color: " #0080FF",
              backgroundColor: "white",
              borderColor:'#0080FF',
              "&:hover": {
                color: "white",
                backgroundColor: "#0080FF",
              },
            }}
            variant="Start Managing"
            
          >
            Start Managing
          </Button>
          
          ......
          
          <div>
      <Box
        sx={{
        }}>

        <div  style={{ display:' flex', justifyContent: 'space-between', marginTop: '5px', }}>
        <Button
            sx={{
                // borderStyle: 'solid',
                // borderWidth: '1px 0.5px',
                cursor: 'pointer',
              marginLeft: 1,
              width: "20%",
              color: " #0080FF",
              backgroundColor: "white",
              borderColor:'grey',
              "&:hover": {
                color: "white",
                backgroundColor: "#0080FF",
              },
            }}
            variant="Start Managing"
            
          >
            Add New Employee
          </Button>


        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: '80%',
            marginLeft: 3,
            marginRight: 1,
            cursor: 'pointer',
            
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search an employee"
            inputProps={{ "aria-label": "search google maps" }}
          />
          <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
        </div>
      
    
        
      </Box>


    </div>*/
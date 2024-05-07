import { Box, Button } from "@mui/material";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
//import ArrowBackIosNewSharpIcon from "@mui/icons-material/ArrowBackIosNewSharp";
import axios from "axios";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
//import TextField from "@mui/material/TextField";
//import SearchIcon from '@mui/icons-material/Search';
import SearchIcon from "@mui/icons-material/Search";

import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import React, { useEffect, useState } from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  // TableFooter,
  TableCell,
  Paper,
} from "@mui/material";

import { styled } from "@mui/system";
// Import styled from @mui/system
import AddEmployee from "./AddEmployee";
import { useNavigate } from "react-router-dom";

function Home() {
  const StyledTableContainer = styled(TableContainer)({
    minWidth: 450,
    maxWidth: 1050,
    minHeight: 400,
    maxHeight: 550,
    border: "1px solid black",
  });
  const CenteredContainer = styled("div")({
    display: "flex",
    justifyContent: "center",
    marginTop: 10,
    height: "100vh", // Adjust as needed to center vertically
  });

  const [rows, setRows] = useState([]); // State to store fetched data

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:8080/employees"); // Replace with your backend endpoint
        setRows(res.data); // Set the fetched data to the state
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  // useEffect(() => {
  //   // Disable scrolling when the component mounts
  //   document.body.style.overflow = "hidden";
  //   // Re-enable scrolling when the component unmounts
  //   return () => {
  //     document.body.style.overflow = "auto";
  //   };
  // }, []);

  const [searchTerm, setSearchedITerm] = useState('');
  
  const filteredRows = rows.filter((row) =>
  Object.values(row).some((value) =>
    typeof value === 'string' && value.toLowerCase().includes(searchTerm.toLowerCase())
  )
);

const Navigate = useNavigate();

const [showAddEmployee, setShowAddEmployee] = useState(false);

const handleAddEmployeeClick = () => {
  setShowAddEmployee(true);
  Navigate("/add-employee");// Navigate to the "/add-employee" route
};

  return (
    <div>
      <Box>
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
        {/* Search and button */}
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            marginLeft: 23,
            marginTop:2,
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            minWidth: 450,
            maxWidth: 1050,
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search an Employee"
            inputProps={{ "aria-label": "search an" }}
            value={searchTerm} onChange={(e) => setSearchedITerm(e.target.value)}   
          />
          <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          {/* <Button 
          onClick={() => navigate("/add-employee")}
           sx={{ 
            color:"white",
            p: "10px" ,
            background: "grey",
            "&:hover": {
              color: "white",
              background: "lightgrey",
            },}}>
            Add New employee

          </Button> 
          <AddEmployee/>*/
          }
          <Button
            onClick={handleAddEmployeeClick}
        sx={{
          color: "white",
          p: "10px",
          background: "grey",
          "&:hover": {
            color: "white",
            background: "lightgrey",
          },
        }
    }
      >
        Add New employee
      </Button>
      {showAddEmployee && <AddEmployee />}
        </Paper>

        {/* table */}
        <CenteredContainer>
          <StyledTableContainer component={Paper}>
            <Table
              aria-label="table with sticky header"
              stickyHeader
              stickyFooter
              stripe="odd"
              hoverRow
            >
              <TableHead
                sx={{ position: "relative" }}
              >
                <TableRow
                  sx={{
                    "& th": {
                      color: "white",
                      fontSize: 20,
                      backgroundColor: "grey",
                    },
                  }}
                >
                  <TableCell>First Name</TableCell>
                  <TableCell>Last Name</TableCell>
                  <TableCell>Gender</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Job Title</TableCell>
                  <TableCell>Department</TableCell>
                  <TableCell align="center">Actions</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {filteredRows.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>{row.first_name}</TableCell>
                    <TableCell>{row.last_name}</TableCell>
                    <TableCell>{row.email}</TableCell>
                    <TableCell>{row.gender}</TableCell>

                    <TableCell>{row.job_title}</TableCell>
                    <TableCell>{row.department}</TableCell>
                    <TableCell>
                      <td>
                        <Box sx={{ display: "flex", width: "50%", gap: 1 }}>
                          <VisibilityOutlinedIcon
                            sx={{
                              display: "flex",
                              justifyContent: "center",
                              borderRadius: "50%",
                              alignItems: "center",
                              cursor: "pointer",
                              "&:hover": {
                                color: "green",
                                background: "#e6e2f0",
                              },
                            }}
                          />
                          <ModeEditOutlineOutlinedIcon
                            sx={{
                              display: "flex",
                              justifyContent: "center",
                              borderRadius: "50%",
                              alignItems: "center",
                              cursor: "pointer",
                              "&:hover": {
                                color: "Blue",
                                background: "#e6e2f0",
                              },
                            }}
                          />
                          <DeleteOutlineOutlinedIcon
                            sx={{
                              display: "flex",
                              justifyContent: "center",
                              borderRadius: "50%",
                              alignItems: "center",
                              cursor: "pointer",
                              "&:hover": {
                                color: "red",
                                background: "#e6e2f0",
                              },
                            }}
                          />
                        </Box>
                      </td>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </StyledTableContainer>
        </CenteredContainer>
      </Box>
    </div>
  );
}

export default Home;

/* <Button
                        size="sm"
                        variant="soft"
                        sx={{
                          width: "5%",
                          color: "black",

                          borderColor: '"blue"',
                          border: "0.1px solid blue ",
                          "&:hover": {
                            // Override hover styles with empty values
                            color: "black",
                            //borderColor: 'green',
                            border: '2px solid "neutral" ',
                            backgroundColor: "neutral",
                          },
                        }}
                      >
                        View
                      </Button>
                      <Button
                        size="sm"
                        variant="plain"
                        sx={{
                          width: "10%",
                          color: "black",
                          borderColor: '"lightblue"',
                          border: "2px solid lightblue ",
                          "&:hover": {
                            // Override hover styles with empty values
                            color: "black",
                            //borderColor: 'green',
                            border: '2px solid "lightblue" ',
                            backgroundColor: "lightblue",
                          },
                        }}
                      >
                        Edit
                      </Button>
                      <Button
                        size="sm"
                        variant="soft"
                        sx={{
                          width: "10%",
                          color: "black",
                          borderColor: '"red"',
                          border: "0.5px solid red ",
                          "&:hover": {
                            // Override hover styles with empty values
                            color: "black",
                            //borderColor: 'green',
                            border: '2px solid "red" ',
                            backgroundColor: "red",
                          },
                        }}
                      >
                        Delete
                      </Button> 
                      
                      <TableFooter
              sx={{
                maxWidth: 100,
                position: "sticky",
                bottom: 0,
                //backgroundColor: "lightblue",
              }}
            >
              <TableRow>
                <TableCell
                  colSpan={10}
                  sx={{ fontSize: "small", textAlign: "right" }}
                >
                  <Button
                    variant="soft"
                    sx={{
                      top: 0,
                      right: 0,
                      marginRight: 4,
                      width: "8%",
                      color: "black",
                      backgroundColor: "transparent",
                      "&:hover": {
                        // Override hover styles with empty values
                        color: "black",

                        border: '2px solid "black" ',
                        background: "grey",
                      },
                    }}
                  >
                    <ArrowBackIosNewSharpIcon />
                    Back
                  </Button>
                </TableCell>
              </TableRow>
            </TableFooter>
            
            ....
            
            
            import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField } from '@mui/material';

function EmployeeTable({ employees }) {
  const [searchTerm, setSearchTerm] = useState('');

  // Filtered employees based on the search term
  const filteredEmployees = employees.filter(employee =>
    employee.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.last_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.gender.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.job_title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      
      <TextField
      label="Search Employees"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      variant="outlined"
      fullWidth
      margin="normal"
    />

   
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Gender</TableCell>
            <TableCell>Job Title</TableCell>
            <TableCell>Department</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
         
          {filteredEmployees.map(employee => (
            <TableRow key={employee.id}>
              <TableCell>{employee.first_name}</TableCell>
              <TableCell>{employee.last_name}</TableCell>
              <TableCell>{employee.email}</TableCell>
              <TableCell>{employee.gender}</TableCell>
              <TableCell>{employee.job_title}</TableCell>
              <TableCell>{employee.department}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </div>
);
}

export default EmployeeTable;
*/

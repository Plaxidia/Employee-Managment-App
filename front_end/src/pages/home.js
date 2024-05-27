import { Box, Button } from "@mui/material";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
//import ArrowBackIosNewSharpIcon from "@mui/icons-material/ArrowBackIosNewSharp";
import axios from "axios";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

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
  TableCell,
  Paper,
} from "@mui/material";
import { styled } from "@mui/system";
// Import styled from @mui/system
import AddEmployee from "./AddEmployee";
import { useNavigate } from "react-router-dom";
import View from "./viewpage";
import Edit from "./editpage";
import BasicPopover from "./deletePopOver";
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

  useEffect(() => {
    // Disable scrolling when the component mounts
    document.body.style.overflow = "hidden";
    // Re-enable scrolling when the component unmounts
    return () => {
      document.body.style.overflow = "fixed";
    };
   }, []);

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
const [showView, setView] = useState(false);

const handleViewClick = (id) => {
  setView(true);
  Navigate(`/view/${id}`);// Navigate to the "/view" route
};



const [showEdit, setEdit] = useState(false);
const handleEditClick = (id) => {
  setEdit(true);
  Navigate(`/edit/${id}`);// Navigate to the "/view" route
};


const [employeeDelete, setDelete] = useState(null);
const [anchorEl, setAnchorEl] = useState(null);
const handleDeleteClick = (id) => {
  setDelete(id);
  setAnchorEl(document.body); // set the anchor to an arbitrary element
};

const handlePopoverClose = () => {
  setDelete(null);
  setAnchorEl(null);
};

const handleDeleteConfirm = async () => {
  if (employeeDelete) {
    try {
      const response = await fetch(`http://localhost:8080/employee/delete/${employeeDelete}`, {
        method: 'DELETE',
      });
      console.log(response)

      if (response.ok) {
        console.log(`Employee with ID ${employeeDelete} deleted`);
        setRows(rows.filter((row) => row.id !== employeeDelete)); // Update the state to remove the deleted employee
        handlePopoverClose();
      } else {
        console.error('Failed to delete the employee');
      }
    } catch (error) {
      console.error('Error occurred while deleting the employee:', error);
    }
  }
};
  return (
    <div>
      <Box>
        <Box sx={{ flexGrow: 1, 
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
          {
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
      {showAddEmployee && <AddEmployee/>}
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
                            onClick={() => handleViewClick(row.id)}
                          
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
                          {showView && <View/>}
                          <ModeEditOutlineOutlinedIcon
                          onClick={() => handleEditClick(row.id)}
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
                          {showEdit && <Edit/>}
                          <DeleteOutlineOutlinedIcon
                          onClick={() => handleDeleteClick(row.id)}
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
                           {employeeDelete && 
                           <BasicPopover 

                           open={Boolean(anchorEl)}
                           anchorEl={anchorEl}
                           onClose={handlePopoverClose}
                           onDelete={handleDeleteConfirm}
                          
                            
                         />
                           }

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

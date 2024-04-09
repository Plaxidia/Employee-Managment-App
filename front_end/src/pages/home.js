import { Box, Button } from "@mui/material";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ArrowBackIosNewSharpIcon from "@mui/icons-material/ArrowBackIosNewSharp";
import axios from "axios";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
//import SearchIcon from '@mui/icons-material/Search';
import React, { useEffect, useState } from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableFooter,
  TableCell,
  Paper,
} from "@mui/material";

import { styled } from "@mui/system";
// Import styled from @mui/system
function Home() {
  const StyledTableContainer = styled(TableContainer)({
    minWidth: 450,
    maxWidth: 1050,
    minHeight:400,
    maxHeight: 550,
    //marginLeft: 100,
    border: "1px solid black",
  });
  const CenteredContainer = styled("div")({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh", // Adjust as needed to center vertically
  });

  //const classes = useStyles();
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

  return (
    <Box>
      <Box sx={{ flexGrow: 1, backgroundColor: "lightblue" }}>
        <AppBar
          position="static"
          sx={{ backgroundColor: "darktblue", color: "black" }}
        >
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Employee Managmment App
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Box
        sx={{
          marginTop: 4,
          display: "flex",
          alignItems: "",
        }}
      >
        <TextField id="demo-helper-text-aligned" label="Search" />
        <Button> add employee</Button>
      </Box>

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
              sx={{ backgroundColor: "lightblue", position: "relative" }}
            >
              <TableRow
                sx={{
                  "& th": {
                    color: "black",
                    fontSize: 20,
                    backgroundColor: "lightblue",
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
              {rows.map((row, index) => (
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
            <TableFooter
              sx={{
                maxWidth: 100,
                position: "sticky",
                bottom: 0,
                backgroundColor: "lightblue",
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
          </Table>
        </StyledTableContainer>
      </CenteredContainer>
    </Box>
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
                      </Button> */

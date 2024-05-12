//import React from 'react';
import React, { useState,useEffect } from "react";
//import Modal from 'react-bootstrap/Modal';
import { useNavigate } from "react-router-dom";
import { Box, Button } from "@mui/material";
import Card from "@mui/material/Card";
import axios from "axios";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { useParams } from 'react-router-dom';
export default function View({match}) {
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
    navigate("/");
  };

  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    jobTitle: '',
    department: ''


  }); // State to store fetched data
  //const { id } = useParams();
  const { params } = match;
// eslint-disable-next-line no-unused-vars
const id = params.id;

  //const product = products.find((p) => p._id === params.id);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:8080/employee/" +match.params.id); // Replace with your backend endpoint
        const fetchedData = res.data; // Extract the fetched data from the response
        setData(fetchedData); // Set the fetched data to the state
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [match.params.id]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await axios.get("http://localhost:8080/employees"); // Replace with your backend endpoint
//         setData(res.data); // Set the fetched data to the state
    
//         setData({
//             firstName: data.firstName,
//             lastName: data.lastName,
//             email: data.email,
//             gender: data.gender,
//             jobTitle: data.jobTitle,
//             department: data.department
//           });
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };
//     fetchData();
//   }, []);

  

  return (
    <div>
      <Box
        sx={{
          flexGrow: 1,
        }}
      >
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
          marginLeft: "28%",
          borderColor: "black",
          position: "static",
          backgroundColor: "White",
          color: "grey",
          maxWidth: 620,
        }}
      >
        <Box
          sx={{
            flexGrow: 1,
            marginTop: 0,
          }}
        >
          <AppBar
            position="static"
            sx={{ backgroundColor: "lightgrey", color: "white" }}
          >
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                View Employee
              </Typography>
              <Button
                sx={{
                  color: "white",
                  background: "grey",
                  cursor: "pointer",
                  "&:hover": {
                    color: "",
                    background: "#e6e2f0",
                  },
                }}
                onClick={() => navigate(-1)}
              >
                {" "}
                Back
              </Button>
            </Toolbar>
          </AppBar>
        </Box>

        <Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              "& > :not(style)": { m: 1 },
            }}
          >
            <TextField
              id="standard-multiline-flexible"
              label="First Name"
              value={data.first_name}
              //multiline
              //maxRows={8}
              variant="standard"
            />
            <TextField
              id="standard-multiline-flexible"
              label="Last Name"
              value={data.last_name}
              //multiline
              //maxRows={8}
              variant="standard"
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              "& > :not(style)": { m: 1 },
            }}
          >
            <TextField
              id="standard-multiline-flexible"
              label="Email"
              value={data.email}
              //multiline
              //maxRows={1}
              variant="standard"
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              "& > :not(style)": { m: 1 },
            }}
          >
            <TextField
              id="standard-multiline-flexible"
              label="Gender"
              value={data.gender}
              //multiline
              //maxRows={1}
              variant="standard"
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              "& > :not(style)": { m: 1 },
            }}
          >
            <TextField
              id="standard-multiline-flexible"
              label="Job Title"
              //
              value={data.job_title}
             // maxRows={8}
              variant="standard"
            />
            <TextField
              id="standard-multiline-flexible"
              label="Department"
              value={data.department}
              //multiline
              //maxRows={8}
              variant="standard"
              //onChange={(e) => setData(e.target.value)} // If you want to allow editing
            />
          </Box>
          <Box
            sx={{
              "& > :not(style)": { m: 1 },
              position: "relative",
              bottom: 0,
              right: 0,
              display: "flex",
              justifyContent: "flex-end",
              padding: "8px",
            }}
          >
            <Button
              sx={{
                color: "white",
                background: "grey",
                cursor: "pointer",
                "&:hover": {
                  color: "",
                  background: "#e6e2f0",
                },
              }}
              type="button"
              onClick={handleCancel}
            >
              Cancel
            </Button>
     </Box>
        </Box>
      </Card>
    </div>
  );
}
/*
import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    // Fetch data from your database using an API call
    fetchDataFromDatabase();
  }, []);

  const fetchDataFromDatabase = async () => {
    // Perform API call to fetch data
    // Replace this with your actual API call to fetch data from the database
    try {
      const response = await fetch('your-api-endpoint');
      const jsonData = await response.json();
      // Assuming the response contains the data you want to populate in the TextField
      setData(jsonData.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      {/* Render TextField with fetched data as its value 
      <TextField
        id="outlined-basic"
        label="Data from Database"
        variant="outlined"
        value={data}
        disabled // Make the TextField read-only
      />
    </div>
  );
}

export default App;


*/
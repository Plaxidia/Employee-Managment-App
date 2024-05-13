
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Button } from "@mui/material";
import Card from "@mui/material/Card";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import axios from "axios";
import ArrowBackIosNewSharpIcon from "@mui/icons-material/ArrowBackIosNewSharp";
export default function View() {

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
    // Check if the current route is already "/"
    if (window.location.pathname !== "/") {
      // If not, navigate to "/"
      navigate("/");
    }
  };
  
  const { id } = useParams();
  const [employee, setEmployee] = useState({
    first_name: "",
    last_name: "",
    email: "",
    gender: "",
    job_title: "",
    department: ""
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:8080/employee/${id}`);
        setEmployee(res.data);
        console.log("ID:", id);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [id]);
  console.log("ID:", id);

  

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: "grey", color: "white" }}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Employee Management App
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Card sx={{ marginTop: 4, marginLeft: "28%", borderColor: "black", position: "static", backgroundColor: "White", color: "grey", maxWidth: 620 }}>
        <Box sx={{ flexGrow: 1, marginTop: 0 }}>
          <AppBar position="static" sx={{ backgroundColor: "lightgrey", color: "white" }}>
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                View Employee
              </Typography>
              <Button sx={{ color: "white", background: "grey", cursor: "pointer", "&:hover": { color: "", background: "#e6e2f0" } }} onClick={() => navigate(-1)}>
              <ArrowBackIosNewSharpIcon/>
                Back
              </Button>
              
            </Toolbar>
          </AppBar>
        </Box>

        <Box>
          <Box sx={{ display: "flex", alignItems: "center", "& > :not(style)": { m: 1 } }}>
            <TextField id="first-name" label="First Name" value={employee.first_name} variant="standard" />
            <TextField id="last-name" label="Last Name" value={employee.last_name} variant="standard" />
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", "& > :not(style)": { m: 1 } }}>
            <TextField id="email" label="Email" value={employee.email} variant="standard" />
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", "& > :not(style)": { m: 1 } }}>
            <TextField id="gender" label="Gender" value={employee.gender} variant="standard" />
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", "& > :not(style)": { m: 1 } }}>
            <TextField id="job-title" label="Job Title" value={employee.job_title} variant="standard" />
            <TextField id="department" label="Department" value={employee.department} variant="standard" />
          </Box> 
        </Box>  

        <Box sx={{ "& > :not(style)": { m: 1 }, position: "relative", bottom: 0, right: 0, display: "flex", justifyContent: "flex-end", padding: "8px" }}>
          <Button sx={{ color: "white", background: "grey", cursor: "pointer", "&:hover": { color: "", background: "#e6e2f0" } }} type="button" onClick={handleCancel}>
            Cancel
          </Button>
        </Box>
      </Card>
    </div>
  );
}

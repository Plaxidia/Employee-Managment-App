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
export default function Edit() {
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
    department: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:8080/employee/${id}`);
        setEmployee(res.data);
        //console.log("ID:", id);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [id]);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee((prevEmployee) => ({
      ...prevEmployee,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    try {
      await axios.put(`http://localhost:8080/employees/update/${id}`, employee);
      navigate("/");
    } catch (error) {
      console.error("Error updating employee:", error);
    }
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          sx={{ backgroundColor: "grey", color: "white" }}
        >
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Employee Management App
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
        <Box sx={{ flexGrow: 1, marginTop: 0 }}>
          <AppBar
            position="static"
            sx={{ backgroundColor: "lightgrey", color: "white" }}
          >
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Edit Employee Details
              </Typography>
              <Button
                sx={{
                  color: "white",
                  background: "grey",
                  cursor: "pointer",
                  "&:hover": { color: "", background: "#e6e2f0" },
                }}
                onClick={() => navigate(-1)}
              >
                <ArrowBackIosNewSharpIcon />
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
              id="first-name"
              label="First Name"
              value={employee.first_name}
              variant="standard"
              onChange={handleChange}
              name="first_name"
            />
            <TextField
              id="last-name"
              label="Last Name"
              value={employee.last_name}
              variant="standard"
              onChange={handleChange}
              name="last_name"
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
              id="email"
              label="Email"
              value={employee.email}
              variant="standard"
              onChange={handleChange}
              name="email"
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
              id="gender"
              label="Gender"
              value={employee.gender}
              variant="standard"
              onChange={handleChange}
              name="gender"
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
              id="job-title"
              label="Job Title"
              onChange={handleChange}
              name="job-title"
              value={employee.job_title}
              variant="standard"
            />
            <TextField
              id="department"
              name="department"
              label="Department"
              value={employee.department}
              variant="standard"
              onChange={handleChange}  
            />
          </Box>
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
                color: "green",
                background: "#e6e2f0",
              },
            }}
            type="submit"
            onClick={handleSave}
          >
            Save
          </Button>
          <Button
            sx={{
              color: "white",
              background: "grey",
              cursor: "pointer",
              "&:hover": { color: "red", background: "#e6e2f0" },
            }}
            type="button"
            onClick={handleCancel}
          >
            Cancel
          </Button>
        </Box>

      </Card>


    </div>
  );
}

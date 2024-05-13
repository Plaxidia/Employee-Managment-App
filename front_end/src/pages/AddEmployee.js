
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button } from "@mui/material";
import Card from "@mui/material/Card";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import axios from "axios";

export default function AddEmployee(props) {
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
    // Navigate back to the home page
    navigate("/");
  };

  const [employees, setEmployees] = useState([]);

  const addEmployee = (newEmployee) => {
    setEmployees([...employees, newEmployee]);
  };

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [job_title, setJobTitle] = useState("");
  const [department, setDepartment] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const newEmployee = {
        id: employees.length + 1,
        firstName,
        lastName,
        email,
        gender,
        job_title,
        department,
      };
      await axios.post("http://localhost:8080/employee/add", newEmployee);
      addEmployee(newEmployee);
      navigate("/");
    } catch (error) {
      console.error("Error adding employee:", error);
    }
  };

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
          <AppBar position="static" sx={{ backgroundColor: "lightgrey", color: "white" }}>
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Add Employee
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
                Back
              </Button>
            </Toolbar>
          </AppBar>
        </Box>
        <form onSubmit={onSubmit}>
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
                variant="standard"
                name="first_name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
              <TextField
                id="last-name"
                label="Last Name"
                variant="standard"
                name="last_name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </Box>
            {/* Other input fields */}
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
                variant="standard"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
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
                variant="standard"
                name="gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                required
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
                variant="standard"
                name="job_title"
                value={job_title}
                onChange={(e) => setJobTitle(e.target.value)}
                required
              />
              <TextField
                id="department"
                label="Department"
                variant="standard"
                name="department"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                required
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
              type="submit"
              sx={{
                color: "white",
                background: "grey",
                cursor: "pointer",
                "&:hover": { color: " blue", background: "#e6e2f0" },
              }}
            >
              Submit
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
        </form>
      </Card>
    </div>
  );
}

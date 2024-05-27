import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import { useNavigate } from "react-router-dom";
import ArrowBackIosNewSharpIcon from "@mui/icons-material/ArrowBackIosNewSharp";
import { Box, Button } from "@mui/material";
import Card from "@mui/material/Card";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
export default function BasicPopover() {
  

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [employeeDelete, setDelete] = React.useState(null);

  const navigate = useNavigate();


  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setDelete(event.currentTarget.dataset.id); // Assuming the button has a data-id attribute
  };

  const handleClose = () => {
    setAnchorEl(null);
    setDelete(null);

    if (window.location.pathname !== "/") {
           //If not, navigate to "/"
          navigate("/");
    }

  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  
  const handleDeleteConfirm = async () => {
    
    if (employeeDelete) {
      try {
        
        const response = await fetch(`http://localhost:8080/employee/delete/ ${employeeDelete}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          console.log(`Employee with ID ${employeeDelete} deleted`);
          // Optionally update the state or trigger a re-fetch of the employee list
          handleClose();
          if (window.location.pathname !== "/") {
            navigate("/");
          }
        } else {
          console.error('Failed to delete the employee');
        }
      } catch (error) {
        console.error('Error occurred while deleting the employee:', error);
      }
    }
  };
  
  const handleCancel = () => {
    handleClose();
  };

  return (

    <div>
      <Box>
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
                Delete Employee
              </Typography>
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
               aria-describedby={id} 
               variant="contained" 
               onClick={handleClick}
               sx={{
               "&:hover": {

                color: "color"
               }
              }}
               >
               Delete
               </Button>
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
              </Box>
            </Toolbar>
          </AppBar>
        </Box>
        
      
       <Popover
        sx={{
          maxHeight: 1500,
          maxWidth: 1500,
        }}
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
       >
        <Typography sx={{ p: 2 }}>
          Are you sure you want to delete this employee?.
        </Typography>
        <FormControl>
          <RadioGroup
            sx={{
              marginLeft: 3,
            }}
            //onClick={(e) => this.deleteRow(post.id, e)}
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Yes"
              onClick={handleDeleteConfirm}
            />

            <FormControlLabel
              value="male"
              control={<Radio />}
              label="No"
              onClick={handleCancel}
            />
          </RadioGroup>
        </FormControl>

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
              "&:hover": { color: "red", background: "#e6e2f0" },
            }}
            type="button"
            onClick={handleCancel}
          >
            Cancel
          </Button>
        </Box>
        </Popover> 
        
      </Card> 
    </Box>
  </div>   
  );
}
  

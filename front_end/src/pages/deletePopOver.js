import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";

import { Box, Button } from "@mui/material";

export default function BasicPopover({employeeDelete, onClose ,id, anchorEl, open, handleDeleteConfirm}) {
  

  return (

    <div>
      <Box>
      
      
       <Popover
        sx={{
          maxHeight: 2500,
          maxWidth: 2500,
        }}
        
        id={id ? `simple-popover-${id}` : undefined}
        open={open}
        anchorEl={anchorEl}
        onClose={onClose}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'center',
        }}
  
       >
        <Typography sx={{ p: 2 
          , 
          color:'red'
        }}>
          Are you sure you want to delete this employee?.
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
            sx={{
              color: "white",
              background: "grey",
              cursor: "pointer",
              "&:hover": { color: "red", background: "#e6e2f0" },
            }}
            type="button"
            
            onClick={handleDeleteConfirm}
          >
            Yes
          </Button>
          <Button
            sx={{
              color: "white",
              background: "grey",
              cursor: "pointer",
              "&:hover": { color: "blue", background: "#e6e2f0" },
            }}
            type="button"
            
            onClick={onClose}
          >
            No
          </Button>
        </Box>
        </Popover> 
        
      
    </Box>
  </div>   
  );
}
  

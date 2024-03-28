import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
//import HomeIcon from '@mui/icons-material/Home';
//import IconButton from '@mui/material/IconButton';
//import MenuIcon from '@mui/icons-material/Menu';


function NavBar() {
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static" sx ={{backgroundColor: 'dark blue' }}>
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          
          {/* <Box sx={{ flexGrow: 1 }} />
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="home"
            sx={{ mr: 0 }}
          >
            <HomeIcon/>
          </IconButton> */}
          
          <Typography variant="h6" component="div"  >
          Employee Managment
          </Typography>
          {/* <Button color="inherit">Employee Managment</Button> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default NavBar;
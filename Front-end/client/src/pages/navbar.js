import React from "react"; 
import { Link } from "react-router-dom";
function Navbar() {
    return (
      <div className="App">
        <nav>
        <Link to="/navbar">NavBar</Link>
        </nav>
      </div>
    );
  }
  
  export default Navbar;
  
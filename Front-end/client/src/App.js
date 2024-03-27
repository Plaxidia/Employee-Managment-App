
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from "./pages/navbar";
import Add from "./pages/add";
import Home from "./pages/home";
function App() {
  return (
    <div className="App">
      home
      <Router>
        <Switch>
      
        <Route path="/" element ={<Home/>} />
        <Route path="/navbar" element = {<Navbar/>}/>
        <Route path="/add" element = {<Add/>}/>
      
      </Switch>
      </Router> 
      
    </div>
  );
}

export default App;


import './App.css';
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Exercise from "./pages/Exercise";
import Skills from "./pages/Skills";
import Dashboard from "./pages/Dashboard";
import {Route, BrowserRouter, Router} from "react-router-dom";


function App() {
  return (
    <div>
        <Signup />
        <hr className="m-12"/>
        <Signin />
        <hr className="m-12"/>
        <Exercise />
        <hr className="m-12"/>
        <Skills />
        <hr className="m-12"/>
      <Dashboard />
    </div>
  );
}



export default App;

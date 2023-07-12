import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";
import shu from "./images/shu.jpg"

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      
      <div className="footer-info">
      
         Developed by{" "}
        <a href="#" style={{ width: "5%", WebkitUserDrag: "none", alignItems:"center", }}>
          Shubham Raj
          </a>
          
        
        
      </div>
      <img src={shu} style={{ width: "10%", WebkitUserDrag: "none", marginTop:"1%", borderRadius:"49%", boxShadow: "8 8 8px 8px white inset" }} />
    </React.Fragment>
  );
}

export default App;

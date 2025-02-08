import React from "react";
import './App.css';

function App() {
  return (
    <div style={{ textAlign: "center", padding: "20px"}}>
      <h1>Welcome to my Portfolio!</h1>
      <p>Check out my CV:</p>
      <a
          href="https://mp-cod.github.io/my-cv-site/Mine2.pdf"
          target="_blank"
          rel="noopener noreferrer"
	  style={{
		  display: "inline-block",
	          padding: "10px 20px",
	          backgroundColor: "#007bff",
		  color: "white",
		  textDecoration: "none",
		  borderRadius: "5px",
		  fontSize: "18px",
		}}
        >
          View CV
        </a>
    </div>
  );
}

export default App;

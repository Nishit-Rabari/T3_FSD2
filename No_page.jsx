import React from "react";
import { Link } from "react-router-dom";

function No_page() {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1 style={{ fontSize: "80px", color: "#ff4c4c" }}>404</h1>
      <h2>Oops! Page Not Found</h2>
      <p>
        The page you are looking for doesn’t exist or has been moved.
      </p>
      <Link to="/" style={{ textDecoration: "none", color: "white" }}>
        <button style={{ padding: "10px 20px", backgroundColor: "#282c34", color: "white", border: "none", marginTop: "20px" }}>
          Go Back Home
        </button>
      </Link>
    </div>
  );
}

export default No_page;

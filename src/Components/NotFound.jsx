import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const notFoundStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center", // Ensures it covers the full viewport heigh
    textAlign: "center",
  };

  const headerStyle = {
    fontSize: "3rem",  // Large font size
    marginBottom: "5px",  // Added margin below the header
  };

  const paragraphStyle = {
    fontSize: "1.5rem",  // Larger font size for the paragraph
    marginBottom: "5px",  // Increased margin below the paragraph
  };

  return (
    <div style={notFoundStyle}>
      <h2 style={headerStyle}>Sorry</h2>
      <p style={paragraphStyle}>That page cannot be found</p>
      <Link to="/" style={{ fontSize: "1.2rem" }}>Back to the homepage...</Link>
    </div>
  );
};

export default NotFound;

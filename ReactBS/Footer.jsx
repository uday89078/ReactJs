import React from "react";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#333", color: "#fff", padding: "20px 0", textAlign: "center", marginTop: "50px" }}>
      <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
      <div style={{ marginTop: "10px" }}>
        <a href="#" style={{ color: "#fff", margin: "0 10px", textDecoration: "none" }}>Privacy Policy</a>
        <a href="#" style={{ color: "#fff", margin: "0 10px", textDecoration: "none" }}>Terms</a>
        <a href="#" style={{ color: "#fff", margin: "0 10px", textDecoration: "none" }}>Contact</a>
      </div>
    </footer>
  );
};

export default Footer;

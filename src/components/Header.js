import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Button, Grid, Box, Hidden } from "@mui/material";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      {/* Container Grid for responsive layout */}
      <Grid container alignItems="center" justifyContent="space-between" spacing={2}>
        {/* Left section: Logo and Title */}
        <Grid item xs={6} sm={2} md={3} className="header-left">
          <img src="../images/logo.png" alt="Logo" className="logo" />
          <h1 className="title">CubeCost</h1>
        </Grid>

       
       

        {/* Right section: Social Media Icons */}
        <Grid item xs={6} sm={10} md={8} className="header-right">
        <Hidden mdDown>
          <Grid item className="header-center">
            <Button color="inherit" className="nav-button">Functional Areas</Button>
            <Button color="inherit" className="nav-button">Solution</Button>
            <Button color="inherit" className="nav-button">Contact</Button>
            <Button variant="contained" color="primary" className="nav-button" id="consult-btn">Consultation</Button>
          </Grid>
        </Hidden>
          <Box display="flex" justifyContent="flex-end" gap={2}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaLinkedin />
            </a>
          </Box>
        </Grid>
      </Grid>
    </header>
  );
}

export default Header;

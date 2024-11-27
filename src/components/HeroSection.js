import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Button, Grid, Card, CardMedia } from "@mui/material";
import "./HeroSection.css";

function HeroSection() {
  const navigate = useNavigate();
  
  const handleButtonClick = () => {
    // Update the path to match the one defined in App.js
    navigate("/loading"); 
  };

  return (
    <Box className="main-body"
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "80vh", 
        justifyContent: "center",
        p: 5,
        pt: 8,
        maxWidth: "1200px", 
        margin: "0 auto", 
      }}
    >
      <Grid container spacing={3}>
        {/* Description Section - Takes up 4 columns */}
        <Grid item xs={12} sm={4} md={4}>
          <Box className="description">
            <Typography variant="h3" gutterBottom className="head-title">
              CubeCost
            </Typography>
            <Typography variant="h2" gutterBottom className="head-title-medium">
              Warehouse Price Prediction
            </Typography>
            <Typography variant="body1" gutterBottom className="head-title-small">
              CubeCost provides accurate warehouse price predictions based on key factors like distance, business operations, and area. Enter your details to get reliable pricing insights and make smarter storage decisions with ease.
            </Typography>
            <Button variant="contained" color="primary" className="consultant-btn" onClick={handleButtonClick}>
              Get a Consultation
            </Button>
          </Box>
        </Grid>

        {/* Image Section - Takes up the remaining 8 columns */}
        <Grid item xs={12} sm={4} md={4}>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Card>
                
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Card>
                
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default HeroSection;

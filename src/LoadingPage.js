import React, { useState } from "react";
import {
  CssBaseline,
  Grid,
  Box,
  Typography,
  TextField,
  Slider,
  Button,
} from "@mui/material";
import WarehouseIcon from "@mui/icons-material/Warehouse";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import "./LoadingPage.css";

const App = () => {
  const [distance, setDistance] = useState("");
  const [businesses, setBusinesses] = useState("");
  const [area, setArea] = useState(50);
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  const handlePrediction = async () => {
    // Prepare the JSON object
    const requestData = {
      distance: parseFloat(distance),
      businesses: parseInt(businesses),
      area: parseFloat(area),
      latitude: parseFloat(latitude),
      longitude: parseFloat(longitude),
    };

    console.log("Request Data:", requestData);

    
    try {
      const response = await fetch("https://example.com/api/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      const responseData = await response.json();
      console.log("API Response:", responseData);
    } catch (error) {
      console.error("Error sending data to the API:", error);
    }
  };

  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          backgroundImage: `url('/images/loading-back-cover.png')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          px: 2,
        }}
      >
        {/* Header */}
        <Typography variant="h3" color="#a6a6a6" gutterBottom className="title">
          CubeCost
        </Typography>
        <Typography
          variant="h6"
          color="#FFC857"
          gutterBottom
          sx={{
            backgroundColor: "rgba(26, 62, 93, 0.8)",
            borderRadius: 2,
            px: 2,
            py: 1,
          }}
        >
          Predict the price of warehouse storage effortlessly
        </Typography>

        {/* Content */}
        <Grid
          container
          spacing={4}
          sx={{
            maxWidth: "1200px",
            margin: "0 auto",
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            boxShadow: 3,
            borderRadius: 2,
            overflow: "hidden",
          }}
        >
          {/* Input Section */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              p: 3,
            }}
          >
            <Typography variant="h5" color="#1A3E5D" gutterBottom>
              Enter Warehouse Details
            </Typography>

            <TextField
              label="Distance (in km)"
              variant="outlined"
              fullWidth
              margin="normal"
              value={distance}
              onChange={(e) => setDistance(e.target.value)}
            />
            <TextField
              label="Number of Businesses"
              variant="outlined"
              fullWidth
              margin="normal"
              value={businesses}
              onChange={(e) => setBusinesses(e.target.value)}
            />
            <Typography color="textSecondary" sx={{ mt: 2 }}>
              Expected Area (sqm)
            </Typography>
            <Slider
              value={area}
              onChange={(e, value) => setArea(value)}
              aria-label="Expected Area"
              valueLabelDisplay="auto"
              min={10}
              max={500}
            />
            <TextField
              label="Latitude"
              variant="outlined"
              fullWidth
              margin="normal"
              type="number"
              step="any"
              value={latitude}
              onChange={(e) => setLatitude(e.target.value)}
            />
            <TextField
              label="Longitude"
              variant="outlined"
              fullWidth
              margin="normal"
              type="number"
              step="any"
              value={longitude}
              onChange={(e) => setLongitude(e.target.value)}
            />
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#1A3E5D",
                mt: 3,
                "&:hover": { backgroundColor: "#FFC857" },
              }}
              onClick={handlePrediction}
            >
              Predict Price
            </Button>
          </Grid>

          {/* Prediction Section */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              backgroundColor: "#1A3E5D",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              p: 3,
              color: "#fff",
            }}
          >
            <WarehouseIcon sx={{ fontSize: 80, mb: 2, color: "#FFC857" }} />
            <Typography variant="h4" gutterBottom>
              Predicted Price
            </Typography>
            <Typography
              variant="h2"
              sx={{ fontWeight: "bold", color: "#FFC857" }}
            >
              $1234.56
            </Typography>
            <TrendingUpIcon sx={{ fontSize: 60, mt: 2 }} />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default App;

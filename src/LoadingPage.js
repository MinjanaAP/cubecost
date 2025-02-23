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
  const [area, setArea] = useState(""); 
  const [predictedPrice, setPredictedPrice] = useState(null); 
  const [distanceError,setDistanceError] = useState("");
  const [businessError, setBusinessesError] = useState("");
  const [areaError,setAreaError] = useState(""); 
  const [resError,setResError] = useState("");
  

  const handlePrediction = async () => {

    setDistanceError("");
    setAreaError("");
    setBusinessesError("");

      //! Validate input fields
    if (!distance || isNaN(distance) || parseFloat(distance) <= 0) {
      // alert("Please enter a valid positive number for Distance.");
      setDistanceError("Please enter a valid positive number for Distance.");
      return;
    }

    if (!businesses || isNaN(businesses) || parseInt(businesses) <= 0) {
      // alert("Please enter a valid positive integer for Number of Businesses.");
      setBusinessesError("Please enter a valid positive integer for Number of Businesses.")
      return;
    }

    if (!area || isNaN(area) || parseFloat(area) <= 0) {
      // alert("Please enter a valid positive number for Area.");
      setAreaError("Please enter a valid positive number for Area.");
      return;
    }

    const requestData = {
      distance: parseFloat(distance),
      businesses: parseInt(businesses),
      area: parseFloat(area),
    };
  
    console.log("Request Data:", requestData);
  
    try {
      const response = await fetch("https://cubecost-backend.onrender.com/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });
  
      const responseData = await response.json();
      const formattedPrice = parseFloat(responseData.price).toFixed(2);
      console.log("Formatted Price:", formattedPrice);
      // console.log("response Error"+ responseData.error)

      if(responseData.error){
        alert("Backend model throws an error : " + responseData.error)
      }

      setPredictedPrice(formattedPrice);
    } catch (error) {
      console.error("Error sending data to the API:", error);
      setPredictedPrice("Error fetching data");
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
        <Typography mb={0} variant="h3" color="#a6a6a6" gutterBottom className="title">
          CubeCost
        </Typography>
        <Typography
          mb={6}
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
            <Typography variant="h5" color="#1A3E5D" gutterBottom >
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
            <span className="error_message">{distanceError}</span>
            <TextField
              label="Number of Businesses"
              variant="outlined"
              fullWidth
              margin="normal"
              value={businesses}
              onChange={(e) => setBusinesses(e.target.value)}
            />
            <span className="error_message">{businessError}</span>
            <TextField
              label="Expected Area (sqm)"
              variant="outlined"
              fullWidth
              margin="normal"
              value={area}
              onChange={(e) => setArea(e.target.value)}
            />
            <span className="error_message">{areaError}</span>
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
              {predictedPrice !== null ? `LKR : ${predictedPrice}` : "$$$"}
            </Typography>
            <TrendingUpIcon sx={{ fontSize: 60, mt: 2 }} />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default App;

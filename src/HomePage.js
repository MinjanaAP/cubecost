import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";

const App = () =>{

    return (
        <div
        style={{
            backgroundImage: 'url("./images/background-home.png")', // Image URL
            backgroundSize: "cover", // Cover the entire page
            backgroundPosition: "center", // Center the background image
            backgroundRepeat: "no-repeat", // Prevent the image from repeating
            minHeight: "100vh", // Ensure it takes the full viewport height
          }}
        >
            <Header />
            <HeroSection />
        </div>
        
    )
}

export default App;
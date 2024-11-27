import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import LoadingPage from "./LoadingPage";

import ChartSection from "./components/ChartSection";

function App() {
  return (
    // <div style={{ fontFamily: "Arial, sans-serif" }}>
    //   <Header />
    //   <HeroSection />
    //   {/* <ChartSection /> */}
    // </div>
    // <LoadingPage />
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/loading" element={<LoadingPage />} />
      </Routes>
    </Router>
  );
}

export default App;

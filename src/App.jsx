import React from "react";
import "./index.css";
import AboutUs from "./pages/About/AboutUs";
import Contact from "./pages/ContactUs/ContactUs";
import Hero from "./pages/Hero/Hero";
import Navbar from "./pages/Navbar/Navbar";
import { Registration } from "./pages/Registration/registration";
import Speaker from "./pages/Speakers/Speakers";
import Workshops from "./pages/Workshops/Workshops";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Updates from "./pages/Updates/Updates";
import Footer from "./pages/Footer/Footer"; // Uncomment if needed
import ComingSoon from "./pages/ComingSoon/ComingSoon";
import { Countdown } from "./pages/Countdown/Countdown";
import { ComicImpactContainer } from "./components/ComicImpact";

const App = () => {
  return (
    <ComicImpactContainer>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Hero />
                {/* <Countdown/> */}
                <AboutUs />
                {/* <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "40px 20px",
                    backgroundColor: "#0a0a1a",
                  }}
                >
                  <img
                    src="/9172242_12614.svg"
                    alt="Decorative"
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                      maxHeight: "400px",
                    }}
                  />
                </div> */}
                {/* <Registration />
                <Speaker />
                <Updates/> */}
                <Workshops />
                <Contact />
                <Footer />
              </>
            }
          />
          <Route path="/coming-soon" element={<ComingSoon />} />
        </Routes>
      </Router>
    </ComicImpactContainer>
  );
};

export default App;

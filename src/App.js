import "./App.css";
import Landingpage from "./Components/Landingpage/Landingpage";
import AppState from "./Components/Context/AppState";
import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Landingpage/Navbar";
import Footer from "./Components/Landingpage/Footer";
import ServicesPage from "./Components/ServicesPage/ServicesPage";
import AboutUsPage from "./Components/AboutUsPage/AboutUsPage";
import Testimonals from "./Components/Landingpage/Testimonals";
import ContactSection from "./Components/Landingpage/ContactSection";

function App() {
  return (
    <>
      <AppState>
        <Router>
          <Routes>
            <Route
              path="/*"
              element={
                <React.Fragment>
                  <Navbar />
                  <div>
                    <Routes>
                      <Route exact path="/" element={<Landingpage />} />
                      <Route
                        exact
                        path="/services"
                        element={<ServicesPage />}
                      />
                      <Route exact path="/aboutus" element={<AboutUsPage />} />
                    </Routes>
                  </div>
                  <Testimonals />
                  <ContactSection />
                  <Footer />
                </React.Fragment>
              }
            />
          </Routes>
        </Router>
      </AppState>
    </>
  );
}

export default App;

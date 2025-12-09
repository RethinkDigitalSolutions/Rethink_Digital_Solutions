// App.jsx
import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Loader from "./components/Loader/Loader";
import HomeContent from "./pages/home/HomeContent";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import { useLoader } from "./context/LoaderContext";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Service from "./pages/Services/Service";

import WebDevelopmentSection from "./pages/Services/Service1";
import UiUxDesignSection from "./pages/Services/Service2";
import FrontendDevelopmentSection from "./pages/Services/Service3";
import BackendDevelopmentSection from "./pages/Services/Service4";
import AiIntegrationSection from "./pages/Services/Service5";
import Portfolio from "./pages/Portfolio/Portfolio";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

const API_BASE_URL = "https://rethinkds.onrender.com";

const AppLayout = () => {
  const location = useLocation();
  const { homeContent, hasVisited, isReady } = useLoader();

useEffect(() => {
  if (!isReady) return;

  if (homeContent || hasVisited) {
    const warmUp = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/rcontact/get-contact`, {
          method: "GET",
          headers: { "ngrok-skip-browser-warning": "true" },
        });

        if (res.ok) {
          console.log("[Warmup] Backend hit successfully");
        } else {
          console.error("[Warmup] Backend responded with status:", res.status);
        }
      } catch (err) {
        console.error("[Warmup] Warm-up failed", err);
      }
    };

    warmUp();
  }
}, [homeContent, hasVisited, isReady]);



  if (!isReady) return null;
  if (!hasVisited && !homeContent) return <Loader />;

  const isAboutPage = location.pathname === "/about";

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeContent />} />
        <Route path="/services" element={<Service />} />
        <Route path="/services/web-development" element={<WebDevelopmentSection />} />
        <Route path="/services/ui-ux-design" element={<UiUxDesignSection />} />
        <Route path="/services/frontend-development" element={<FrontendDevelopmentSection />} />
        <Route path="/services/backend-development" element={<BackendDevelopmentSection />} />
        <Route path="/services/ai-integration" element={<AiIntegrationSection />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* Global footer on every page EXCEPT /about */}
      {!isAboutPage && <Footer />}
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
};

export default App;

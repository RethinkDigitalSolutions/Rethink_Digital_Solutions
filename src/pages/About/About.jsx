// pages/About/About.jsx
import { useState } from "react";
import AboutHero from "./AboutHero";
import Footer from "../../components/Footer/Footer";

const About = () => {
  const [aboutLoaded, setAboutLoaded] = useState(false);

  const handleAboutLoaded = () => {
    setAboutLoaded(true);
  };

  return (
    <>
      <AboutHero onAboutLoaded={handleAboutLoaded} />
      {aboutLoaded && <Footer />}
    </>
  );
};

export default About;

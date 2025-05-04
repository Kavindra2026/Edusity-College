import React, { useState } from "react";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Program from "./components/Program/Program";
import Title from "./components/Title/Title";
import About from "./components/About/About";
import Campus from "./components/Campus/Campus";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Video from "./components/Video/Video";

const App = () => {
  const [playSate, setPlaySate] = useState(false);

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="Container">
        <Title subtitle="Our Program" title="What We offer" />
        <Program />
        <About setPlaySate={setPlaySate} />
        <Title subtitle="Gallery" title="Campus Photos" />
        <Campus />
        <Title subtitle="Testimonials" title="What Student Says" />
        <Testimonials />
        <Title subtitle="Contact us" title="Get in Touch" />
        <Contact />
        <Footer />
        <Video playSate={playSate} setPlaySate={setPlaySate} />
      </div>
    </div>
  );
};
export default App;

import React from "react";
import Hero from "./Hero";

import Services from "./Services";
import RecentWork from "./RecentWork";
import Testimonials from "./Testimonials";
import CTA from "./CTA";
import AboutSection from "./AboutSection";


const Home = () => {
  return (
    
    <div className=""><Hero/>
      <AboutSection/>
      <Services/>
      <RecentWork/>
      <Testimonials/>
      <CTA/>
      </div>
  );
};

export default Home;

import React from "react";
import Layout from "./components/Layout";
import Content from "./components/smallComponent/Content";
import Services from "./components/smallComponent/Services";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SuperFolio from "./components/SuperFolio";
import NoPage from "./components/NoPage";
import Contact from "./components/Contact";
import About from "./components/About";
import Skill from "./components/Skill";
import Experience from "./components/Experience";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<SuperFolio />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="skils" element={<Skill />} />
          <Route path="portfolio" element={<Content />} />
          <Route path="experience" element={<Experience />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

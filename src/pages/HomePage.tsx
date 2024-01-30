import React from "react";
import "./HomePage.css";
import NavBar from "../components/navBar/NavBar.tsx";
import Profile from "../components/profile/Profile.tsx";
import Skills from "../components/skills/Skills.tsx";
import Experience from "../components/experience/Experience.tsx";
import Projects from "../components/projects/Projects.tsx";
import Education from "../components/education/Education.tsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "../components/footer/Footer.tsx";

export default function HomePage() {
  return (
    <Router>
      <div className="navigation-bar">
        <NavBar />
      </div>
      <div className="">
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/education" element={<Education />} />
        </Routes>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </Router>
  );
}

import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "./components/Header";
import HeaderMobile from "./components/Header-mobile";
import Projects from "./components/Projects";
import AboutMe from "./components/About-me";
import Skills from "./components/Skills";
import DetailProject from "./components/Detail-project";
import "./App.css";
import { ProjectProvider } from "./context/ProjectContext";
const App = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 823);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 823);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const HeaderComponent = isMobile ? HeaderMobile : Header;

  return (
    <ProjectProvider>
      <Router>
        <div className="app">
          <HeaderComponent />
          <Routes>
            <Route path="/" element={<Navigate to="/projects" />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about-me" element={<AboutMe />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/detail-project" element={<DetailProject />} />
          </Routes>
        </div>
      </Router>
    </ProjectProvider>
  );
};

export default App;

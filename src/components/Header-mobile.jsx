import React, { useState } from "react";
import { Link } from "react-router-dom";

const HeaderMobile = () => {
  console.log("Rendering HeaderMobile");
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handdleClick = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <header className="header-mobile">
        <h2 className="header-mobile-title">Portafolio Web - Limbert Molina</h2>
        <div className="burger-menu">
          <div
            className={`burger-button ${isOpen ? "open" : ""}`}
            onClick={toggleMenu}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          <nav className={`menu ${isOpen ? "open" : ""}`}>
            <ul className="nav-main-list">
              <li className="nav-main-item">
                <Link
                  to="/projects"
                  className="nav-main-link"
                  onClick={handdleClick}
                >
                  Proyectos
                </Link>
              </li>
              <li className="nav-main-item">
                <Link
                  to="/about-me"
                  className="nav-main-link"
                  onClick={handdleClick}
                >
                  Quien soy
                </Link>
              </li>
              <li className="nav-main-item">
                <Link
                  to="/skills"
                  className="nav-main-link"
                  onClick={handdleClick}
                >
                  Tecnologias
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default HeaderMobile;

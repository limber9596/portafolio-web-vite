import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <header className="header-main">
                <h2 className="header-main-title">
                    Portafolio Web - Limbert Molina
                </h2>
                <nav className="nav-main">
                    <ul className="nav-main-list">
                        <li className="nav-main-item">
                            <Link to="/projects" className="nav-main-link">
                                Proyectos
                            </Link>
                        </li>
                        <li className="nav-main-item">
                            <Link to="/about-me" className="nav-main-link">
                                Quien soy
                            </Link>
                        </li>
                        <li className="nav-main-item">
                            <Link to="/skills" className="nav-main-link">
                                Tecnologias
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    );
};

export default Header;

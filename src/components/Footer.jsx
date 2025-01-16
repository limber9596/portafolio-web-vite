// Footer.js
import React from "react";
import { FaEnvelope, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="contact-icons">
                    <a href="mailto:tu-correo@gmail.com" aria-label="Correo">
                        <FaEnvelope />
                    </a>
                    <a
                        href="https://wa.me/1234567890"
                        aria-label="WhatsApp"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaWhatsapp />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

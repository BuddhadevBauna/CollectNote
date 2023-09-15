import React from "react";
import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <p>copyright © {new Date().getFullYear()}</p>
        </footer>
    );
}
export default Footer;
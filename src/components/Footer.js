import React from 'react';
import waves from "../assets/wave.svg"
import './HeaderFooter.css';

function Footer() {
    return (
        <footer className="site-footer">
            <div className="footer">
                <img className="footer-waves" src={waves} alt="wavy white divider" />
            </div>
        </footer>
    );
}

export default Footer;
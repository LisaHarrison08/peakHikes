import React from 'react';
import './HeaderFooter.css';
import video from "../video/fuji.mp4"

function Header() {
    return (
        <header className="site-header">
            <video autoPlay loop muted>
                <source src={video} type="video/mp4"/>
            </video>
         </header>
    )
}

export default Header;
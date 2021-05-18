import React from 'react';
import Logo from '../assets/logo_black.png';
import '../../src/Stylesheet.css';

const Header = ({ style }) => {
    return (
        <div id="div_flex" style={style}>
            <div>
                <a href ='#'>
                    <img className="logo" src  = {Logo} alt='Logo'/>
                </a>
            </div>
            <div id = "logobar"></div>
            <div className="logo_text">
                <h>YOUR AI THERAPIST</h>
            </div>
        </div>
    );
}

export default Header;
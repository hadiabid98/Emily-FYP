import React from 'react';
import Logo from '../assets/logo_black.png';
import '../../src/Stylesheet.css';

const Header =()=>{
    return (
        <div id="div_flex">
            <div>
                <a href ='#'>
                    <img class="logo" src  = {Logo} alt='Logo'/>
                </a>
            </div>
            <div id = "logobar">
            </div>
            <div class="logo_text">
                <h>YOUR AI THERAPIST</h>
            </div>

        </div>
    );

}

export default Header;
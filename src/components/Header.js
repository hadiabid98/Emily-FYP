import React from 'react';
import Logo from '../assets/logo_white.png';
import '../../src/App.css';

const Header =()=>{
    return (
        <div class="header">
            <div class="logocont">
                <a href ='#'>
                    <img class="logo" src  = {Logo} alt='Logo'/>
                </a>
            </div>
            <div class = "logo bar">
            </div>
            <div class="HeaderMenu">

            </div>

        </div>
    );

}

export default Header;
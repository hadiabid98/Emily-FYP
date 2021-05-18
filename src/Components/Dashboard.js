import React, { useState } from 'react';
import '../Stylesheet.css';
import Header from './Header';
import doctor from '../assets/doctor.png'
import rep from '../assets/document.png'
import usr from '../assets/man.png'
import logout from '../assets/logout.png'
function Dashboard() {
    // const { auth } = this.props

    var pageTitle = `WELCOME`
    return (
        
        <div className="div">
            <Header/>
            <div ><br></br></div>
                <div>
                   <p className="welcome">
                       {pageTitle}<span className="welcome_user"> ABDUL HADI</span>
                   </p>
                </div>
                <br></br> 
            <div className="dash">
                <p className="title" id="dash_title" >DASHBOARD</p>
                <hr className="hr"></hr>
            </div> 
            <div className="grid">
                <button className="db_btn">
                    <span><img src={doctor}  className="btn_logo"/> </span>
                    <p className="small_font">START SESSION</p>
                </button>
                <button className="db_btn">
                    <span><img src={rep}  className="btn_logo"/> </span>
                    <p className="small_font">REPORTS</p>
                </button>              
                <button className="db_btn">
                    <span><img src={usr}  className="btn_logo"/> </span>
                    <p className="small_font">USER PROFILE</p>
                </button>              
                <button className="db_btn " id="Lst_row">
                    <span><img src={logout}  className="btn_logo"/> </span>
                    <p className="small_font">SIGN OUT</p>
                </button>            
            </div>  
        </div>
            


        )
    }
    export default Dashboard;
import React, { useState } from 'react';
import '../Stylesheet.css';
import Header from './Header';
import ReactPhoneInput from 'react-phone-input-material-ui'
import {TextField, Button} from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
function Signup() {

    const [getid, setid] = useState("");
    const [getEmail, setEmail] = useState("");
    const [getContact, setContact] = useState("");
    const [getPassword, setPassword] = useState("");
    const [getConfirmPassword, setConfirmPassword] = useState("");


    return (
    
        <div className="div" >
            <Header/>
            <div><br></br><br></br></div>
            <div className="dialog_box_signup">
                <span className="title">NEW USER</span>
                <hr id='hr'></hr>
                <TextField fullWidth  size="small" id="standard-basic" label="User Name" type='text' value={getid} onChange={(data) => { setid(data.target.value) }}   />
                <br></br>
                <TextField fullWidth  size="small" id="standard-basic" label="Email" type='Email' value={getEmail} onChange={(data) => { setid(data.target.value) }} />
                <br></br>
                {/* <ReactPhoneInput enableAreaCodes= "true" value={getContact} onChange={(data) => { setContact(data.target.value) }} component={PhoneNo} /> */}
                <TextField fullWidth  size="small" id="standard-basic" label="Phone Number" type='text' pattern="03[0-9]{9}"  value={getContact} onChange={(data) => { setContact(data.target.value) }} />
                <br></br>
                <TextField fullWidth size="small" id="standard-basic" label="Password" type='password' value={getPassword} onChange={(data) => { setPassword(data.target.value)}} />                
                <br></br>
                <TextField fullWidth size="small" id="standard-basic" label="Confirm Password" type='password' value={getConfirmPassword} onChange={(data) => { setConfirmPassword(data.target.value)}} />
                <br></br><br></br>
                <Button variant="contained" endIcon={<ArrowForwardIosIcon />} onClick={() => alert('Logged In')}>CONTINUE</Button>
                <div className='small_font' id='txt'>
                    RETURNING USER? <a className='txt_hyperlink' href="#">LOGIN <span></span></a>                 
                </div>

            </div>
        </div>
    )
}
export default Signup;
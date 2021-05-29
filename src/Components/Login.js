import React, { useState } from 'react';
import '../Stylesheet.css';
import Header from './Header';
import {TextField, Button} from '@material-ui/core';

function Login() {

    const [getid, setid] = useState("");
    const [getPassword, setPassword] = useState("");

    return (
        <div className="div" >
            <Header/>
            <div className="dialog_box_login">
                <p className="welcome">WELCOME</p>
                <span className="title">LOGIN</span>
                <hr id='hr'></hr>
                <TextField fullWidth  size="small" id="standard-basic" label="User Name" type='text' value={getid} onChange={(data) => { setid(data.target.value) }} />
                <br></br>
                <br></br>
                <TextField fullWidth size="small" id="standard-basic" label="Password" type='text' value={getPassword} onChange={(data) => { setPassword(data.target.value)}} />                
                <br></br>
                <a className='txt_hyperlink' href='#'>FORGET PASSWORD?</a>
                <br></br>
                <Button variant="contained" onClick={() => alert('Logged In')}>LOGIN</Button>
                <br></br>
                <div className='small_font' id='txt'>
                    NEW USER? CREATE <a className='txt_hyperlink' href="#">NEW ACCOUNT NOW! <span></span></a>                 
                </div>
                <br></br>
            </div>

        </div>
    )
}
export default Login;
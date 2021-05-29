import React, { useState } from 'react';
import '../Stylesheet.css';
import Header from './Header';
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
                <label className='label'>USER ID:</label>
                <br></br>
                <input className='inp_box'placeholder="USER NAME"  type='text' value={getid} onChange={(data) => { setid(data.target.value) }} />
                <br></br>
                <label className='label'>PASSWORD:</label>
                <br></br>
                <input className='inp_box' placeholder="PASSWORD" type='password' value={getPassword} onChange={(data) => { setPassword(data.target.value)}} />
                
                <a className='txt_hyperlink' style= {{margin:'-2px'}} href='#'>FORGET PASSWORD?</a>
                <br></br>
                <input type='submit' value="LOGIN" onClick={() => alert('Logged In')} />
                <br></br>
                <div className='small_font' id='txt'>
                    NEW USER? CREATE <a className='txt_hyperlink' href="#">NEW ACCOUNT NOW! <span></span></a>                 
                </div>
                <div>
                    <br></br>
                    <br></br>
                </div>
            </div>

        </div>
    )
}
export default Login;
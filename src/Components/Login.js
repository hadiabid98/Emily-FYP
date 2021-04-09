import React, { useState } from 'react';
import './Login.css';
import Header from './Header';
function Login() {

    const [getid, setid] = useState("");
    const [getPassword, setPassword] = useState("");

    return (
        <div className="container" style={{background: "#2D324D " }}>
            <div>
                <Header />
            </div>
            <div className="box">
                <p className="heading">WELCOME</p>
                <span className="heading1">LOGIN</span>
                <hr></hr>
                <label>USER ID:</label>
                <br></br>
                <input type='text' value={getid} onChange={(data) => { setid(data.target.value) }} />
                <br></br>
                <label>PASSWORD:</label>
                <br></br>
                <input type='password' value={getPassword} onChange={(data) => { setPassword(data.target.value)}} />
                <br></br>
                <p>FORGET PASSWORD?</p>
                <input type='submit' onClick={() => alert('Logged In')} />
                <br></br>
                <p>NEW USER? CREATE YOUR OWN ACCOUNT!</p>
                
            </div>
        </div>
    )
}
export default Login;
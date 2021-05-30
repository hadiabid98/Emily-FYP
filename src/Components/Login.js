import axios from 'axios';
import React, { useState } from 'react';
import '../Stylesheet.css';
import Header from './Header';
import { useHistory } from 'react-router-dom';
import { TextField, Button } from '@material-ui/core';

function Login() {

    const [getid, setid] = useState("");
    const [getPassword, setPassword] = useState("");
    const history = useHistory();

    const handleLogin = (e) => {
        e.preventDefault();
        if (getid.length > 0 && getPassword.length > 0) {
            const data = {
                username: getid,
                password: getPassword
            }
            axios.post('http://localhost:5000/users/login', data, {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                }
            })
                .then(res => {
                    if (res.data.success) {
                        history.push({
                            pathname: '/home',
                            state: {
                                user: res.data.user,
                                token: res.data.token,
                            }
                        })
                    }
                })
        }
        else {
            alert("Enter Credentials")
        }
    }

    return (
        <div className="div" >
            <Header />
            <div className="dialog_box_login">
                <p className="welcome">WELCOME</p>
                <span className="title">LOGIN</span>
                <hr id='hr'></hr>
                <TextField fullWidth size="small" id="standard-basic" label="User Name" type='text' value={getid} onChange={(data) => { setid(data.target.value) }} />
                <br></br>
                <br></br>
                <TextField fullWidth size="small" id="standard-basic" label="Password" type='password' value={getPassword} onChange={(data) => { setPassword(data.target.value) }} />
                <br></br>
                <a className='txt_hyperlink' href='#'>FORGET PASSWORD?</a>
                <br></br>
                <Button variant="contained" onClick={(e) => handleLogin(e)}>LOGIN</Button>
                <br></br>
                <div className='small_font' id='txt'>
                    NEW USER? CREATE <a className='txt_hyperlink' href="/signup">NEW ACCOUNT NOW! <span></span></a>
                </div>
                <div>
                    <br></br>

                </div>
            </div>

        </div>
    )
}
export default Login;
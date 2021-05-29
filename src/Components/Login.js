import axios from 'axios';
import React, { useState } from 'react';
import '../Stylesheet.css';
import Header from './Header';
import { useHistory } from 'react-router-dom';
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
                <label className='label'>USER ID:</label>
                <br></br>
                <input className='inp_box' placeholder="USER NAME" type='text' value={getid} onChange={(data) => { setid(data.target.value) }} />
                <br></br>
                <label className='label'>PASSWORD:</label>
                <br></br>
                <input className='inp_box' placeholder="PASSWORD" type='password' value={getPassword} onChange={(data) => { setPassword(data.target.value) }} />

                <a className='txt_hyperlink' style={{ margin: '-2px' }} href='#'>FORGET PASSWORD?</a>
                <br></br>
                <input type='submit' value="LOGIN" onClick={(e) => handleLogin(e)} />
                <br></br>
                <div className='small_font' id='txt'>
                    NEW USER? CREATE <a className='txt_hyperlink' href="/signup">NEW ACCOUNT NOW! <span></span></a>
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
import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import '../Stylesheet.css';
import Header from './Header';
function Signup() {

    const [getid, setid] = useState("");
    const [getEmail, setEmail] = useState("");
    const [getContact, setContact] = useState("");
    const [getPassword, setPassword] = useState("");
    const [getConfirmPassword, setConfirmPassword] = useState("");
    const history = useHistory();

    const checkSubmit = () => {
        return (getid.length > 0 &&
            getEmail.length > 0 &&
            getPassword.length > 0 &&
            getConfirmPassword.length > 0 &&
            getContact.length > 0
        )
    }

    const onConfirm = (e) => {
        e.preventDefault();
        if (getPassword === getConfirmPassword && checkSubmit()) {
            const data = {
                username: getid,
                email: getEmail,
                contact: getContact,
                password: getPassword,
            }
            axios.post('http://localhost:5000/users/signup', data, {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                }
            })
                .then(res => {
                    if (res.data.success) {
                        history.push({
                            pathname: '/verify',
                            state: {
                                user: res.data.user
                            }
                        })
                    }
                })
        } else {
            alert('Invalid Credentails')
        }
    }

    return (
        <div className="div" >
            <Header />
            <div><br></br><br></br></div>
            <div className="dialog_box_signup">
                <span className="title">NEW USER</span>
                <hr id='hr'></hr>
                <label className='label'>USER ID:</label>
                <br></br>
                <input className='inp_box' placeholder="USER NAME" type='text' value={getid} onChange={(data) => { setid(data.target.value) }} />
                <br></br>
                <label className='label'>EMAIL:</label>
                <br></br>
                <input className='inp_box' placeholder="EMAIL" type='email' value={getEmail} onChange={(data) => { setEmail(data.target.value) }} />
                <br></br>
                <label className='label'>CONTACT NUMBER:</label>
                <br></br>
                <input className='inp_box' placeholder="CONTACT NUMBER" type='text' pattern="03[0-9]{9}" value={getContact} onChange={(data) => { setContact(data.target.value) }} />
                <br></br>
                <label className='label'>PASSWORD:</label>
                <br></br>
                <input className='inp_box' placeholder="PASSWORD" type='password' value={getPassword} onChange={(data) => { setPassword(data.target.value) }} />
                <br></br>
                <label className='label'>CONFIRM PASSWORD:</label>
                <br></br>
                <input className='inp_box' placeholder="CONFIRM PASSWORD" type='password' value={getConfirmPassword} onChange={(data) => { setConfirmPassword(data.target.value) }} />

                <input type='submit' value="CONFIRM" onClick={(e) => onConfirm(e)} />
                <br></br>
                <div className='small_font' id='txt'>
                    RETURNING USER? <a className='txt_hyperlink' href="/">LOGIN <span></span></a>
                </div>

            </div>
        </div>
    )
}
export default Signup;
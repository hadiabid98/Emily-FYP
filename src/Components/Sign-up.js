import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import '../Stylesheet.css';
import Header from './Header';
import { TextField, Button, } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
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

    const onConfirm = () => {
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
                <TextField fullWidth size="small" id="standard-basic" label="User Name" type='text' value={getid} onChange={(data) => { setid(data.target.value) }} />
                <br></br>
                <TextField fullWidth size="small" id="standard-basic" label="Email" type='Email' value={getEmail} onChange={(data) => { setEmail(data.target.value) }} />
                <br></br>
                <TextField fullWidth size="small" id="standard-basic" label="Phone Number" type='text' pattern="03[0-9]{9}" value={getContact} onChange={(data) => { setContact(data.target.value) }} />
                <br></br>
                <TextField fullWidth size="small" id="standard-basic" label="Password" type='password' value={getPassword} onChange={(data) => { setPassword(data.target.value) }} />
                <br></br>
                <TextField fullWidth size="small" id="standard-basic" label="Confirm Password" type='password' value={getConfirmPassword} onChange={(data) => { setConfirmPassword(data.target.value) }} />
                <br></br><br></br>
                <Button variant="contained" endIcon={<ArrowForwardIosIcon />} onClick={onConfirm}>CONTINUE</Button>
                <div className='small_font' id='txt'>
                    RETURNING USER? <a className='txt_hyperlink' href="/login">LOGIN <span></span></a>
                </div>

            </div>
        </div>
    )
}
export default Signup;
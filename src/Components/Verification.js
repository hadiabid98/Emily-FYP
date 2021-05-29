import axios from 'axios';
import React, { Profiler, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import '../Stylesheet.css';
import Header from './Header';
function Verify() {

    const [getTimer, setTimer] = useState(30)
    const [getEmailVerify, setEmailVerify] = useState("");
    const [getConVerify, setConVerify] = useState("");
    const [user, setUser] = useState(null)
    const location = useLocation()
    const history = useHistory();

    useEffect(() => {
        if (getTimer > 0) {
            setTimeout(() => setTimer(getTimer - 1), 1000);
        }
    });

    useEffect(() => {
        console.log(location)
        if (location.state) {
            setUser(location.state.user);
        }
    }, [location])

    const handleContinue = (e) => {
        e.preventDefault();
        const data = {
            user: user
        }
        axios.post('http://localhost:5000/users/verify', data, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            }
        })
            .then(res => {
                if (res.data.success) {
                    history.push({
                        pathname: '/create_profile',
                        state: {
                            user: res.data.user
                        }
                    })
                }
            })
    }

    return (
        <div className="div" >
            <Header />
            <div className="dialog_box_signup">
                <span className="title">VERIFICATION</span>
                <hr id='hr'></hr>
                <div className='grid_verify' style={{ textAlign: 'left', justifyContent: 'left' }}>
                    <label className='label'>EMAIL VERIFICATION:</label>
                    <div className='small_font' style={{ textAlign: 'left' }} id='txt'>
                        RESEND IN {getTimer} sec. {getTimer == 0 ? <a className='txt_hyperlink' href="#">RESEND <span></span></a> : <span></span>}
                    </div>
                    <div>
                        <input className="inp_box" placeholder="ENTER OTP" type='text' value={getEmailVerify} onChange={(data) => { setEmailVerify(data.target.value) }} />
                        <input type='submit' style={{ float: 'right' }} value="VERIFY" onClick={() => alert('Email Verified')} />
                    </div>
                    <label className='label'>CONTACT VERIFICATION:</label>
                    <div className='small_font' style={{ textAlign: 'left' }} id='txt'>
                        RESEND IN {getTimer} sec.  {getTimer == 0 ? <a className='txt_hyperlink' href="#">RESEND <span></span></a> : <span></span>}
                    </div>
                    <div >
                        <input className="inp_box" placeholder="ENTER OTP" type='text' value={getConVerify} onChange={(data) => { setConVerify(data.target.value) }} />
                        <input type='submit' style={{ float: 'right' }} value="VERIFY" onClick={() => alert('Contact Verified')} />
                    </div>
                    <div>
                        <hr id='hr' style={{ height: '1.5px' }}></hr>
                        <input type='submit' style={{ float: 'right' }}
                            value="CONTINUE" onClick={(e) => handleContinue(e)} />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Verify;
import React, { Profiler, useEffect, useState } from 'react';
import '../Stylesheet.css';
import Header from './Header';
function Verify() {

    const [getTimer, setTimer] = useState(30)
    const [getEmailVerify, setEmailVerify] = useState("");
    const [getConVerify, setConVerify] = useState("");

    useEffect(() => {
        if (getTimer > 0) {
            setTimeout(() => setTimer(getTimer - 1), 1000);
        }
    });

    return (
        <div className="div" >
            <Header />
            <div className="dialog_box_signup">
                <span className="title">VERIFICATION</span>
                <hr id='hr'></hr>
                <div className='grid_verify' style={{textAlign:'left', justifyContent:'left'}}>
                    <label className='label'>EMAIL VERIFICATION:</label>
                    <div className='small_font' style={{textAlign:'left' }} id='txt'>
                        RESEND IN {getTimer} sec. {getTimer == 0 ? <a className='txt_hyperlink' href="#">RESEND <span></span></a> : <span></span>}
                    </div>
                    <div>
                        <input className="inp_box" placeholder="ENTER OTP" type='text' value={getEmailVerify} onChange={(data) => { setEmailVerify(data.target.value) }} />
                        <input type='submit' style={{ float: 'right'}} value="VERIFY" onClick={() => alert('Email Verified')} />
                    </div>
                    <label className='label'>CONTACT VERIFICATION:</label>
                    <div className='small_font' style={{ textAlign: 'left' }} id='txt'>
                        RESEND IN {getTimer} sec.  {getTimer == 0 ? <a className='txt_hyperlink' href="#">RESEND <span></span></a> : <span></span>}
                    </div>
                    <div >
                        <input className="inp_box" placeholder="ENTER OTP" type='text' value={getConVerify} onChange={(data) => { setConVerify(data.target.value) }} />
                        <input type='submit' style={{ float: 'right'}} value="VERIFY" onClick={() => alert('Contact Verified')} />
                    </div>
                    <div>
                    <hr id='hr' style={{height:'1.5px'}}></hr>
                    <input type='submit' style={{ float:'right'}} value="CONTINUE" onClick={() => alert('Verified Successfully')} />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Verify;
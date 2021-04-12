import React, { useState } from 'react';
import '../Stylesheet.css';
import Header from './Header';
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
                <label className='label'>USER ID:</label>
                <br></br>
                <input className='inp_box' placeholder="USER NAME"  type='text' value={getid} onChange={(data) => { setid(data.target.value) }} />
                <br></br>
                <label className='label'>EMAIL:</label>
                <br></br>
                <input className='inp_box'placeholder="EMAIL"  type='email' value={getEmail} onChange={(data) => { setEmail(data.target.value) }} />
                <br></br>
                <label className='label'>CONTACT NUMBER:</label>
                <br></br>
                <input className='inp_box'placeholder="CONTACT NUMBER"  type='text' pattern="03[0-9]{9}" value={getContact} onChange={(data) => { setContact(data.target.value) }} />
                <br></br>
                <label className='label'>PASSWORD:</label>
                <br></br>
                <input className='inp_box' placeholder="PASSWORD" type='password' value={getPassword} onChange={(data) => { setPassword(data.target.value)}} />
                <br></br>
                <label className='label'>CONFIRM PASSWORD:</label>
                <br></br>
                <input className='inp_box' placeholder="CONFIRM PASSWORD" type='password' value={getConfirmPassword} onChange={(data) => { setConfirmPassword(data.target.value)}} />

                <input type='submit' value="CONFIRM" onClick={() => alert('Successfully Signed-Up')} />
                <br></br>
                <div className='small_font' id='txt'>
                    RETURNING USER? <a className='txt_hyperlink' href="#">LOGIN <span></span></a>                 
                </div>

            </div>
        </div>
    )
}
export default Signup;
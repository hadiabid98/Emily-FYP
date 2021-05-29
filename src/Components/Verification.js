import { Button, Grid, InputAdornment, TextField } from '@material-ui/core';
import axios from 'axios';
import React, { Profiler, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import EmailIcon from '@material-ui/icons/Email';
import TextsmsIcon from '@material-ui/icons/Textsms';

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
            <div style={{height: "15%"}}></div>
            <div className="dialog_box_signup">
                <span className="title">VERIFICATION</span>
                <hr id='hr'></hr>

            <Grid container spacing={2} >
            <Grid item xs={6} >
            <TextField fullWidth label='Email Verification' size="small" id="input-with-icon-grid" type='text' helperText="Enter OTP received via Email!" value={getEmailVerify} onChange={(data) => { setEmailVerify(data.target.value) }} InputProps={{startAdornment: (<InputAdornment position="start"><EmailIcon /></InputAdornment>), }} />
            
            <div className='small_font' style={{textAlign:'left' }} id='txt'>
            RESEND IN Email {getTimer} sec. {getTimer == 0 ? <a className='txt_hyperlink' href="#">RESEND <span></span></a> : <span></span>}
            </div>
            
            </Grid>
            <Grid item sx= {6} >
            <Button variant="contained" onClick={() => alert('Contact Verified')}>VERIFY</Button>
            </Grid>
            <Grid item xs={6}>
            <TextField fullWidth label='SMS Verification' size="small" id="input-with-icon-grid" type='text' helperText="Enter OTP received via SMS"  value={getConVerify} onChange={(data) => { setConVerify(data.target.value) }} InputProps={{startAdornment: (<InputAdornment position="start"><TextsmsIcon /></InputAdornment>), }}/>
            <div className='small_font' style={{textAlign:'left' }} id='txt'>
            RESEND IN Email {getTimer} sec. {getTimer == 0 ? <a className='txt_hyperlink' href="#">RESEND <span></span></a> : <span></span>}
            </div>
            </Grid>
            <Grid item sx= {6} >
            <Button variant="contained" onClick={() => alert('Contact Verified')}>VERIFY</Button>
            </Grid>
            </Grid>
            
            <hr id='hr' style={{height:'1.5px'}}></hr>
            <Button variant="contained" endIcon={<ArrowForwardIosIcon />}  onClick={(e) => handleContinue(e)}>CONTINUE</Button>
            
            </div>
        </div>
    )
}
export default Verify;
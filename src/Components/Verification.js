import React, { Profiler, useEffect, useState } from 'react';
import '../Stylesheet.css';
import Header from './Header';
import {Grid, TextField, Button,InputAdornment} from '@material-ui/core';
import EmailIcon from '@material-ui/icons/Email';
import TextsmsIcon from '@material-ui/icons/Textsms';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

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
            <Button variant="contained" endIcon={<ArrowForwardIosIcon />}  onClick={() => alert('Contact Verified')}>CONTINUE</Button>
            
            </div>
        </div>
    )
}
export default Verify;
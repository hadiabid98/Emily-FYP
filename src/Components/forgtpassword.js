import { Button, Grid, InputAdornment, TextField } from '@material-ui/core';
import axios from 'axios';
import React, { Profiler, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import '../Stylesheet.css';
import Header from './Header';

function Forgetpass() {

    const [getEmail, setEmail] = useState("");

    return (
        <div className="div" >
            <Header />
            <div style={{ height: "15%" }}></div>
            <div className="dialog_box_signup">
                <span className="title">FORGET PASSWORD</span>
                <hr id='hr'></hr>

                <Grid container spacing={2} >
                    <Grid item xs={12} >
                        <TextField fullWidth size="small" id="standard-basic" label="Email" type='Email' value={getEmail} onChange={(data) => { setEmail(data.target.value) }} />
                    </Grid>
                </Grid>

                <hr id='hr' style={{ height: '1.5px' }}></hr>
                <Button variant="contained" >CONTINUE</Button>

            </div>
        </div>
    )
}
export default Forgetpass;
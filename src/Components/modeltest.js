import { Button, Grid, TextField, Input } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import axios from 'axios';
import React, { Profiler, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import '../Stylesheet.css';
import Header from './Header';

const useStyles = makeStyles((emily) => ({
    input: {
        display: 'none',
    },
}));

function Modeltest() {

    const classes = useStyles();
    const file = React.createRef();

    const handelClassify = () => {
        const data = new FormData()
        data.append('file', file.current.files[0])

        axios.post("http://127.0.0.1:5000/classify", data, {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
            }
        })
            .then(res => console.log(res.data))
    }

    return (
        <div className="div" >
            <Header />
            <div style={{ height: "15%" }}></div>
            <div className="dialog_box_signup">
                <span className="title">MODEL TEST</span>
                <hr id='hr'></hr>

                <Grid container spacing={2} >
                    <Grid item xs={6}>
                        <input
                            className={classes.input}
                            id="contained-button-file"
                            ref={file}
                            type="file"
                        />
                        <label htmlFor="contained-button-file">
                            <Button variant="contained"
                                color="primary"
                                component="span"
                            >
                                Upload
                            </Button>
                        </label>
                        <Grid item xs={6}>
                            <Button variant="contained"
                                color="primary"
                                component="span"
                                onClick={handelClassify}
                            >
                                Classify
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>


            </div>
        </div>
    )
}
export default Modeltest;
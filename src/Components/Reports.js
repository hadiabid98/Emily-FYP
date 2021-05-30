import React, { useEffect, useState } from 'react';
import '../Stylesheet.css';
import file from '../assets/file.png';
import email from '../assets/email.png';
import comment from '../assets/comment.png';
import Header from './Header';
import { useHistory } from 'react-router';
function Report() {

    const history = useHistory()


    return (

        <div className="div">
            <Header />

            <div style={{ height: '10%' }}></div>
            <div className="dialog_box_profile" style={{ maxWidth: '65%' }} >
                <span className="title" style={{ fontSize: '30px' }}>REPORTS</span>
                <hr id='hr'></hr>
                <p className="row" >

                    <span className="label_li width5p">NO </span>
                    <span className="label_li width40p"> REPORT DATE AND TIME </span>
                    <span className="label_li width40p"> REPORT TITLE </span>
                    <span className="label_li width15p"> ACTIONS </span>

                </p>
                <hr id='hr'></hr>
                <div className="row" >
                    <span className="label_li width5p">01 </span>
                    <span className="label_li width40p"> FEB 21,2021 | 10:37:56 </span>
                    <span className="label_li width40p"> PATIENT 312_SESSION_REPORT </span>
                    <span className="label_li width15p">
                        <img src={file} className="report_img" onClick={() => history.push("/RT")} />
                        <img src={email} className="report_img" />
                        <img src={comment} className="report_img" />
                    </span>
                </div>
                <div className="row" >
                    <span className="label_li width5p">02 </span>
                    <span className="label_li width40p"> FEB 21,2021 | 10:37:56 </span>
                    <span className="label_li width40p"> PATIENT 312_SESSION_REPORT </span>
                    <span className="label_li width15p">
                        <img src={file} className="report_img" onClick={() => history.push("/RT")} />
                        <img src={email} className="report_img" />
                        <img src={comment} className="report_img" />
                    </span>
                </div>
                <div className="row" >
                    <span className="label_li width5p">03 </span>
                    <span className="label_li width40p"> FEB 21,2021 | 10:37:56 </span>
                    <span className="label_li width40p"> PATIENT 312_SESSION_REPORT </span>
                    <span className="label_li width15p">
                        <img src={file} className="report_img" onClick={() => history.push("/RT")} />
                        <img src={email} className="report_img" />
                        <img src={comment} className="report_img" />
                    </span>
                </div>
            </div>

        </div>
    )
}

function Report_row() {
    return (
        <div className="row" >
            <span className="label_li width5p">03 </span>
            <span className="label_li width40p"> FEB 21,2021 | 10:37:56 </span>
            <span className="label_li width40p"> PATIENT 312_SESSION_REPORT </span>
            <span className="label_li width15p">
                <img src={file} className="report_img" />
                <img src={email} className="report_img" />
                <img src={comment} className="report_img" />
            </span>
        </div>
    )
}

export default Report;
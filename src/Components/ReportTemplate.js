import React from 'react';
import '../Stylesheet.css';
import Header from './Header';

class EOS extends React.Component {
    constructor() {
        super()
        this.state = {
            user: {
                id: '89898989',
                fname: 'Aleena',
                lnane: 'Naveed',
                age: 21,
                gender: 'Female',
                visit: 1,
                dob: 'OCT 26 1999'
            },
            dot: new Date().toLocaleString(),//date of test,
            depression: true,
            level: "MILD",
            PHQ_Score: 18,
        }
    }
    getSuperScript(num) {
        const n = num % 10
        if (n === 1)
            return 'st'
        else if (n === 2)
            return 'nd'
        else if (n === 3)
            return 'rd'
        else
            return 'th'
    }
    render() {
        return (
            <div style={{ backgroundColor: "#fff", width: "683px", height: "1024px", margin: "auto"}}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}>
                    <Header logoColor={{ color: '#2d324d', fontSize: '16px' }} borderLeft={{ borderLeft: '5px solid black' }} />
                    <p style={{
                        paddingRight: '15px',
                        color: '#2d324d',
                        fontWeight: 'bold',
                        fontSize: '16px'
                    }}>Patient Id: {this.state.user.id}</p>
                </div>
                <div style={{
                    textAlign: 'center',
                    textDecoration: 'underline',
                    color: '#2d324d',
                    fontWeight: 'bold',
                    width: 'max-content',
                    margin: 'auto',
                    fontFamily: "Corporate Logo Rounded",
                }}>
                    <h1>SESSION REPORT</h1>
                </div>
                <div style={{
                    color: '#2d324d',
                    fontFamily: "Corporate Logo Rounded",
                    padding: '10px',
                    textDecoration: 'underline',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}>
                    <p>NAME: {this.state.user.fname.toUpperCase() + ' ' + this.state.user.lnane.toUpperCase()}</p>
                    <p>DOB: {this.state.user.dob}</p>
                    <p>AGE: {this.state.user.age}</p>
                    <p>GENDER: {this.state.user.gender}</p>
                </div>
                <div style={{
                    color: '#2d324d',
                    fontFamily: "Corporate Logo Rounded",
                    padding: '10px',
                    textDecoration: 'underline',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}>
                    <p>DATE &amp; TIME OF VISIT: {this.state.dot}</p>
                    <p>VISIT: {this.state.user.visit} <sup>{this.getSuperScript(this.state.user.visit)}</sup> </p>
                    <p>VISIT HISTORY: {this.state.user.visit > 1 ? 'Avaliable' : 'N/A'}</p>
                </div>
                <div style={{
                    width: '65%',
                    fontFamily: "Corporate Logo Rounded",
                    padding: '10px',
                    color: '#2d324d',
                    margin: 'auto',
                    alignItems: 'baseline'
                }}>
                    <hr style={{
                        height: '3px',
                        backgroundColor: '#2d324d',
                    }} />
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}>
                        <div style={{
                            width: '35%',
                            textAlign: 'center'

                        }}>
                            <h1>INITIAL ANALYSIS</h1>
                        </div>
                        <hr style={{
                            width: '3px',
                            backgroundColor: '#2d324d'
                        }} />
                        <div style={{
                            width: '60%'
                        }}>
                            <h2>DEPRESSION: {this.state.depression ? 'YES' : 'NO'}</h2>
                            <h2>LEVEL: {this.state.level}</h2>
                            <h2>PHQ-8 SCORE: {this.state.PHQ_Score}</h2>
                        </div>
                    </div>
                </div>
                <div style={{
                    fontFamily: "Corporate Logo Rounded",
                    padding: '10px',
                    color: '#2d324d',
                }}>
                    <h1 style={{
                        textDecoration: 'underline'
                    }}>REPORT: </h1>
                    <div style={{ paddingLeft: '10px' }}>
                        <p>During the session the AI therapist was able to analyze following activities of
                        the patient while anwering the questions.</p>
                        <ul>
                            <li style={{ paddingLeft: '10px' }}>Patient was continously leaning forwadr and backword.</li>
                            <li style={{ paddingLeft: '10px' }}>Patient was gazing downwards while answering the question.</li>
                            <li style={{ paddingLeft: '10px' }}>There were noticed lots of movements while answering</li>
                        </ul>
                    </div>
                </div>
                <div style={{
                    fontFamily: "Corporate Logo Rounded",
                    padding: '10px',
                    color: '#2d324d',
                }}>
                    <h1 style={{
                        textDecoration: 'underline'
                    }}>EXERCISES: </h1>
                    <div style={{ paddingLeft: '10px' }}>
                        <p>One vigirous excersise session can help alleviate symptoms for hours and a regular
                        schedule may significantly reduce them over time.</p>
                        <p>One vigirous excersise session can help alleviate symptoms for hours and a regular
                        schedule may significantly reduce them over time</p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row-reverse' }}>
                        <p>END OF REPORT </p>
                    </div>
                </div>
                <hr style={{
                    height: '3px',
                    backgroundColor: '#2d324d'
                }} />
                <div style={{
                    fontFamily: "Corporate Logo Rounded",
                    padding: '10px',
                    color: '#2d324d',
                }}>
                    <p>NOTE: This report is computer generated and it depicts the condition of your
                    depression as best as a machine could analyze you. Although a machine cannot analyze
                        you 100% correct if certain conditions are not metfor the machine.</p>
                </div>
            </div>
        )
    }
}

export default EOS;
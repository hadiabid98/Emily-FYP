import React, { useEffect, useState } from 'react';
import '../Stylesheet.css';
import Header from './Header';
import doctor from '../assets/doctor.png'
import rep from '../assets/document.png'
import usr from '../assets/man.png'
import logout from '../assets/logout.png'
import { useHistory, useLocation } from 'react-router';


function Dashboard() {
    const location = useLocation()
    const [user, setUser] = useState(null)
    const [token, setToken] = useState(null)
    const [name, setName] = useState('')
    const history = useHistory()
    useEffect(() => {
        if (location.state) {
            setUser(location.state.user)
            setToken(location.state.token)
            setName(location.state.user.fname.toUpperCase() + ' ' + location.state.user.lname.toUpperCase())
        }
    }, [location])

    var pageTitle = `WELCOME`
    return (

        <div className="div">
            <Header />
            <div ><br></br></div>
            <div>
                <p className="welcome">
                    {pageTitle}<span className="welcome_user"> ABDUL HADI</span>
                </p>
            </div>
            <br></br>
            <div className="dash">
                <p className="title" id="dash_title" >DASHBOARD</p>
                <hr className="hr"></hr>
            </div>

            <div className="grid">
                <button className="ripple db_btn" onClick={user ?
                    () =>
                        history.push({
                            pathname: '/modeltest',
                            state: {
                                user: user,
                                token: token,
                            }
                        })
                    :
                    () => console.log('test')
                }>
                    <span><img src={doctor} className="btn_logo" /> </span>
                    <p className="small_font">START SESSION</p>
                </button>
                <button className="ripple db_btn">
                    <span><img src={rep} className="btn_logo" /> </span>
                    <p className="small_font">REPORTS</p>
                </button>
                <button className="ripple db_btn" onClick={user ?
                    () =>
                        history.push({
                            pathname: '/settings',
                            state: {
                                user: user,
                                token: token,
                            }
                        })
                    :
                    () => console.log('test')
                }>
                    <span><img src={usr} className="btn_logo" /> </span>
                    <p className="small_font">USER PROFILE</p>
                </button>
                <button className="ripple db_btn " id="Lst_row" onClick={() => history.push('/')}>
                    <span><img src={logout} className="btn_logo" /> </span>
                    <p className="small_font">SIGN OUT</p>
                </button>
            </div>
        </div>

    )
}
export default Dashboard;
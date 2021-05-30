import React, { useState } from 'react';

import Login from './Login';
import Signup from './Sign-up';
import Verification from './Verification';
import Profile from './UserProfile';
import Dashboard from './Dashboard';

import Settings from './Settings';
import Report from './Reports';
import EOS from './ReportTemplate';
import Forgtpass from './forgtpassword';


import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';
import Modeltest from './modeltest';

export default function Main() {
    var history = useHistory();
    return (
        <div>
            <Router history={history}>
                <Switch>
                    <Route exact path='/'>
                        <Login />
                    </Route>
                    <Route path='/login'>
                        <Login />
                    </Route>
                    <Route path='/signup'>
                        <Signup />
                    </Route>
                    <Route path='/verify'>
                        <Verification />
                    </Route>
                    <Route path='/create_profile'>
                        <Profile />
                    </Route>
                    <Route path='/home'>
                        <Dashboard />
                    </Route>
                    <Route path='/settings'>
                        <Settings />
                    </Route>
                    <Route path='/report'>
                        <Report />
                    </Route>
                    <Route path='/RT'>
                        <EOS />
                      <Route path='/forgtpassword'>
                        <Forgtpass />
                    </Route>
                    <Route path='/modeltest'>
                        <Modeltest />

                    </Route>
                </Switch>
            </Router>
        </div>
    )

}
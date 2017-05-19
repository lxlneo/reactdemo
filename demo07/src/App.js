import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Redirect
} from 'react-router-dom'
import Nav from './components/nav';
import Account from './components/account';
import Home from './components/home';
import Login from './components/login';
import "./App.css"

export default class App extends  Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: true,
            userName: 'wahaha'
        }
    }
    render(){
       return(
            <Router>
                <div style={{ display: 'flex' }}>
                    <Nav/>
                    <div className="main">
                        <Route exact path="/home" component={Home} />
                        <Route path="/account"  component={Account} />
                        <Route path="/login"  component={Login} />
                    </div>
                </div>
            </Router>
       )
    }
}
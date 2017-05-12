import React from 'react'
import Nav from  './components/nav'
import Home from './components/home'
import Account from './components/account'
import NoMatch from './components/noMatch'
import RecursivePaths from './components/recursivePaths'

import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom'
 
 
const App = () => (
    <Router>
        <div>
            <Nav/>
            <hr/>
            <Switch>
            <Route exact path="/home" component={Home}/>
            <Route path="/about" component={Account}/>
            <Route path="/recursivePaths" component={RecursivePaths}/>
            <Route component={NoMatch}/>
            </Switch>
        </div>
    </Router>
)
export default App
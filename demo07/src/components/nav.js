import React, {Component} from 'react';
import {Link,Redirect} from 'react-router-dom';

export default class Nav extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLogin:true,
            userName:'wahaha'
        }
    }
    
    render() {
        return (
            <div className="Nav">
                   <ul>
                    <li> <Link  to="/home">home</Link></li>
                    <li> <Link to="/account">account</Link></li>
                </ul>
            </div>
        )
    }
}
import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Nav extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <ul>
                <li> <Link to="/home">home</Link></li>
                <li> <Link to="/about">about</Link></li>
                <li> <Link to="/recursivePaths">recursivePaths</Link></li>
                <li> <Link to="/orders">orders</Link></li>
                <li> <Link to="/product">product</Link></li>
            </ul>
        )
    }
}
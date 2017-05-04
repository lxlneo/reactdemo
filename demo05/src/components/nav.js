import React, {Component} from 'react';
import {Link,IndexLink} from 'react-router';

export default class Nav extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <ul>
                <li> <IndexLink to="/">home</IndexLink></li>
                <li> <link to="/acount">account</link></li>
                <li> <link to="/bills">bills</link></li>
                <li> <link to="/orders">orders</link></li>
                <li> <link to="/product">product</link></li>
            </ul>
        )
    }
}
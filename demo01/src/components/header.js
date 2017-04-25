import React,{Component} from 'react';
import logo from './../logo.svg';
import '../css/header.css';
export default class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
            logo:'this a logo',
            nums:0
        }
    }
    handleLogoClick(){
        this.setState({logo:this.state.nums++})
    }
    render(){
        return(
            <div className="App-header">
            <img src={logo} className="App-logo" alt={this.state.logo} title={this.state.logo} onClick={this.handleLogoClick.bind(this)} />
            <h2>This  Header</h2>
            <h3>this logo is click <span className='text-red'>{this.state.nums}</span> times</h3>
        </div>
    )
    }
}
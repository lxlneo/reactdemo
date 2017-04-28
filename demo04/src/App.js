import React, {Component} from 'react';
import './App.css';

import Header from './components/header';
import Body from './components/body';
import Nav from './components/nav';

class App extends Component {
   constructor(props){
        super(props);
        this.state = {
            headerInfo:"this is a message for header from App",
            bodyInfo:"this is a message for body from App",
            navs:['itemA','itemB','itemC','itemD','itemE']
        }
    }
    onClickHandle(entry){
        console.log('onClickHandle',entry);
        var navs = this.state.navs;
        this.setState({navs:navs.push('item'+new Math.random())})
    }
    render() {
        return (
            <div className="App">
                <Header info={this.state.headerInfo} />
                <Nav navs={this.state.navs}  onClickHandler={this.onClickHandle} />
                <Body info={this.state.bodyInfo}/>
            </div>
        );
    }
}

export default App;

import React, {Component} from 'react';
import './App.css';

import Header from './components/header';
import Body from './components/body';
 
class App extends Component {
   constructor(props){
        super(props);
        this.state = {
            headerInfo:"this is a message for header from App",
            bodyInfo:"this is a message for body from App",
            navs:['itemA','itemB','itemC','itemD','itemE'],
            times:234
        }
    }
    onClickHandle(entry){
        console.log('onClickHandle',entry);
    }
    render() {
        return (
            <div className="App">
                <Header info={this.state.headerInfo} />
                <Body info={this.state.bodyInfo}  times={this.state.times}  />
            </div>
        );
    }
}

export default App;

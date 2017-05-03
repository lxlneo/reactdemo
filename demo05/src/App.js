import React, {Component} from 'react';
import './App.css';

import Header from './components/header';
import Body from './components/body';

class App extends Component {
   constructor(props){
        super(props);
        this.state = {
            headerInfo:"this is a message for header from App",
            bodyInfo:"bodyInfo",
            navs:['itemA','itemB','itemC','itemD','itemE']
        }
    }
    onClickHandle(entry){
        console.log('onClickHandle',entry);
        var navs = this.state.navs;
        this.setState({navs:navs.push('item'+new Math.random())})
    }
    shouldUpdateBodyInfo(){
        this.setState({bodyInfo:"new bodyInfo"})
    }
    shouldNotUpdateBodyInfo(){
        this.setState({bodyInfo:"bodyInfo"})
    }
    render() {
        return (
            <div className="App">
                <Header info={this.state.headerInfo} />
                <button onClick={this.shouldUpdateBodyInfo.bind(this)}>update body info</button>
                <button onClick={this.shouldNotUpdateBodyInfo.bind(this)}>do not update body info</button>
                <Body info={this.state.bodyInfo}/>
            </div>
        );
    }
}

export default App;

import React ,{Component} from 'react';

export default class Home extends Component{
    constructor(props){
        console.log('constructor')
        super(props)
    }
    
    render(){
        return(
            <div>
              <h1>Home</h1> 
            </div>
          )
    }
}
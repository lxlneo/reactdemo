import React ,{Component} from 'react';

export default class Account extends Component{
    constructor(props){
        console.log('constructor')
        super(props)
    }
    
    render(){
        return(
            <div>
              <h1>Account</h1> 
            </div>
          )
    }
}
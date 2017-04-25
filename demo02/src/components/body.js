import React ,{Component} from 'react';

export default class Body extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <p className="App-intro">
                {this.props.info}
        </p>
    )
    }
}
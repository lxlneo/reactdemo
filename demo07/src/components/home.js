import React ,{Component} from 'react';

export default class Home extends Component{
    constructor(props){ 
        super(props);
        this.state={
            list:[1,2,3,4,5,6,7,8,9,10]
        }
    }
     
    render(){
        return(
            <div>
              <h1>Home</h1>
                <ul>
                    {this.state.list.map(function (value, index) {
                        return  <li key={index}>{value}</li>
                    })}
                </ul>
            </div>
          )
    }
}
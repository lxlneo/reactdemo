import React ,{Component} from 'react';

export default class Nav extends Component{
    constructor(props) {
        super(props);
    }
    
    render(){
        return(
           <ul>
             {this.props.navs.map((entry,index)=>{
                 <li key=list-{index}>entry</li>  
           })}
           </ul>
    )
    }
}
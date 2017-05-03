import React, {Component} from 'react';

export default class Nav extends Component {
    constructor(props) {
        super(props);
    }
    clickHandler(e,entry){
        console.log("clickHandler",entry)
        this.props.onClickHandler(entry)
    }
    render() {
        return (
            <ul>
                {this.props.navs.map((entry,index)=> {  //navs通过 props 父组件传递过来
                        return <li key={entry} onClick={this.clickHandler.bind(this,entry)} >{entry}</li>
                    }
                )}
            </ul>
        )
    }
}
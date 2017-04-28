import React ,{Component} from 'react';

export default class Body extends Component{
    constructor(props){
        console.log('constructor')
        super(props)
    }
    componentWillMount(){
        console.log('componentWillMount')
    }
    componentDidMount(){
        console.log('componentDidMount')
    }
    componentWillReceiveProps(nextProps){
        console.log('componentWillReceiveProps')
    }
    shouldComponentUpdate(nextProps,nextState){
        console.log('shouldComponentUpdate')
    }
    componentWillUpdate(nextProps,nextState){
        console.log('componentWillUpdate')
    }
    componentDidUpdate(nextProps,nextState){
        console.log('componentDidUpdate')
    }
    componentWillUnmount(){
        console.log('componentWillUnmount')
    }
    
    render(){
        return(
            <p className="App-intro">
                {this.props.info}
        </p>
    )
    }
}
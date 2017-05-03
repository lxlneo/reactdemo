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
        console.log('componentDidMount') // ajax 更新数据在这个方法里面执行
    }
    componentWillReceiveProps(nextProps){
        console.log('componentWillReceiveProps')
    }
    shouldComponentUpdate(nextProps,nextState){
        console.log('shouldComponentUpdate')
        console.log(nextProps,this.props);
        return nextProps.info != this.props.info   //比较属性 看是否需要修改 当需要修改的时候返回true 属性发生改变返回true
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
            <div>
            <p className="App-intro">
                {this.props.info}
            </p>
               <img src="https://raw.githubusercontent.com/kdchang/reactjs101/master/Ch04/images/react-lifecycle.png"/> 
            </div>
          )
    }
}
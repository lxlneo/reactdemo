import React ,{Component} from 'react';

export default class Account extends Component{
    constructor(props){
        super(props);
        this.state={
           name:"",
            age:"",
            sex:"男",
            info:"intro"
        }
        this.submitHander = this.submitHander.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    submitHander(event){
        event.preventDefault()
        this.setState({
            name:this.state.name.split('').reverse().join('-'),
                sex:this.state.sex,
                age:this.state.age+10,
            info:this.state.info.toUpperCase()
        })
    }
    handleChange(event) {
        let target = event.target;
        let name = event.target.name;
        let value = target.value;
        let temp = {};
        temp[name] = value
        this.setState(temp);
    }
    render(){
        return(
            <div className="form-panel">
              <form  onSubmit={this.submitHander}>
                  <label>姓名<input type="text" name="name" value={this.state.name}  onChange={this.handleChange} /></label>
                  <label>性别<input type="text" name="sex" value={this.state.sex}  onChange={this.handleChange} /></label>
                  <label>年龄<input type="text" name="age" value={this.state.age}  onChange={this.handleChange} /></label>
                  <label>简介<textarea value={this.state.info} name="info"  onChange={this.handleChange}></textarea></label>
                  <button type="submit">提交数据</button>
              </form>
            </div>
          )
    }
}
import React ,{Component} from 'react';
import '../css/body.css';
export default class Body extends Component{
    constructor(props){
        super(props)
        this.state = {
            inputValue:'input',
            checkbox:false,
            radioButton:true,
            select:'D',
            textarea:'this is textarea'
        }
       this.handleChange = this.handleChange.bind(this); //绑定 this
       this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event){
        let name = event.target.name;
        let value = event.target.value;
        let temp = {};
        temp[name] = value;
        this.setState(temp);
    }
    
    handleSubmit(event){
        console.log('submit');
    }
    
    render(){
        return(
          <form className="formDemo" onSubmit={this.handleSubmit} >
              <label>文本框<input type="text" name="inputValue" value={this.state.inputValue}  onChange={this.handleChange} /></label>
              <label>单选<input type="checkbox" name="checkbox"  onChange={this.handleChange} /></label>
              <label>复选<input type="radio" name="radioButton"  onChange={this.handleChange} /></label>
              <label>文本框<select name="select" value={this.state.select}  onChange={this.handleChange}>
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="C">C</option>
                  <option value="D">D</option>
              </select>
              </label>
              <label>
                  <textarea name="textarea" value={this.state.textarea} onChange={this.handleChange}>
                      
                  </textarea>
              </label>
          </form>
    )
    }
}
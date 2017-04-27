import React ,{Component} from 'react';
import '../css/body.css';
export default class Body extends Component{
    constructor(props){
        super(props)
        this.state = {
            inputValue:'input',
            radioButton:'',
            select:'D',
            textarea:'this is textarea',
            checkboxSet:[]
        }
       this.handleChange = this.handleChange.bind(this); //绑定 this
       this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentWillMount = () => {
        this.selectedCheckboxes = {};
    }
    
    handleChange(event){
        let target = event.target;
        let name = event.target.name;
        let value = target.value;
        if(target.type == 'checkbox'){  // 处理checkbox的选中
           if(this.selectedCheckboxes[value]){
               target.checked = false;
               delete this.selectedCheckboxes[value];
           }else{
               target.checked = true;
               this.selectedCheckboxes[value]=value;  
           }
            this.setState({checkboxSet:Object.keys(this.selectedCheckboxes)})
        }else {
            let temp = {};
            temp[name] = value;
            this.setState(temp);    
        }
        
    }
    
    handleSubmit(event){
        event.preventDefault();
        console.log('submit');
        console.log(this.state);
    }
    
    render(){
        return(
          <form className="formDemo" onSubmit={this.handleSubmit} >
              <label>文本框<input type="text" name="inputValue" value={this.state.inputValue}  onChange={this.handleChange} /></label>
              <label>复选1<input type="checkbox" name="checkbox" value="c1"  onChange={this.handleChange} /></label>
              <label>复选2<input type="checkbox" name="checkbox" value="c2"  onChange={this.handleChange} /></label>
              <label>单选1<input type="radio" checked={this.state.radioButton == 'r1'} name="radioButton" value="r1"  onChange={this.handleChange} /></label>
              <label>单选2<input type="radio" checked={this.state.radioButton == 'r2'} name="radioButton"  value="r2" onChange={this.handleChange} /></label>
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
              <label><button type="submit">提交</button></label>
          </form>
    )
    }
}
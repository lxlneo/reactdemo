#基本使用
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Table of Contents
- [npm start](#npm-start)
  - [npm test](#npm-test)
  - [npm run build](#npm-run-build)
  - [npm run eject](#npm-run-eject)

## Comments
- css类名写法 使用```className```而不是```class```
  >
  ```
   <div className="App-header">
  ```

- html属性中添加state的值不用加`"` 
 >
 ```
    <img src={logo} className="App-logo" alt={this.state.logo} title={this.state.logo} />
 ```
 
 - 绑定方法
  
  >声明方法
  ```
    handleLogoClick(){
            this.setState({logo:this.state.nums++})
        }
  ```
  >使用方法
  ```
    <img src={logo} className="App-logo" alt={this.state.logo} title={this.state.logo} onClick={this.handleLogoClick.bind(this)} />
  ```
  
  
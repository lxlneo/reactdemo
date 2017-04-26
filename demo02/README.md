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
- 父组件和子组件通信
  - 通过```props```传递值
    >父组件
     ```
       <Header info={this.state.headerInfo} /> 
     ```
     >子组件
     ```
     <h2>{this.props.info}</h2>
     ```
     
     
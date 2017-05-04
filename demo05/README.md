# react-router
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Table of Contents
- [npm start](#npm-start)
  - [npm test](#npm-test)
  - [npm run build](#npm-run-build)
  - [npm run eject](#npm-run-eject)

## Comments
路由的用法

- Router ```Router``` 是放置 Route 的容器，其本身不定义 routing ，真正 routing 规则由 Route 定义。
- Route ```Route``` 负责 URL 和对应的元件关系，可以有多个 Route 规则也可以有嵌套（nested）Routing。比如```Topics```组件
- 定义参数 ``` <Route path="XXXXX/:id" component={Topic}/>```
   ```
   Topics = ({ match }) => (
       // match.params.id  这样来取得 路由参数id
   )
   ```
   
# react-router-dom
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Table of Contents
- [npm start](#npm-start)
  - [npm test](#npm-test)
  - [npm run build](#npm-run-build)
  - [npm run eject](#npm-run-eject)

## Comments
react-router-dom

###BrowserRouter
>NOTE
>  
> 基于HTML5 history API(pushState, replaceState and the popstate event)
> 维持UI和URL地址同步

```javascript
import { BrowserRouter } from 'react-router-dom'

<BrowserRouter
  basename={optionalString}
  forceRefresh={optionalBool}
  getUserConfirmation={optionalFunc}
  keyLength={optionalNumber}
>
  <App/>
</BrowserRouter>


```
#### args
 - ```basename``` 定义一个基础目录，如果有二级目录的通过这个统一配置
 ```
   <BrowserRouter basename="/calendar"/>
   <Link to="/today"/> // renders <a href="/calendar/today">
 ```


### HashRouter 
>NOTE
>通过浏览器hash值(window.location.hash)来满足同步UI和URL
> Hash history 不支持```location.key``` ```location.state``` 推荐大家通过配置服务端使用```BrowserRouter```
```javascript
 import { HashRouter } from 'react-router-dom'
 
 <HashRouter
 basename={basename}
 getUserConfirmation={}
 hashType="slash"
 
 >
   <App/>
 </HashRouter>
 
```

#### args

- hashType
>hashType : string
> 几种不同的hash方式
  - "slash" -【Defaults】 Creates hashes like #/ and #/sunshine/lollipops
  - "noslash" - Creates hashes like # and #sunshine/lollipops
  - "hashbang" - Creates “ajax crawlable” (deprecated by Google) hashes like #!/ and #!/sunshine/lollipops


###  Link
>NOTE 
>用作导航链接用的类似 A标签


```javascript
import { Link } from 'react-router-dom'

<Link to="/about">About</Link>
```

# NavLink
>NOTE
>一种特殊的```<Link>``` 可以添加 ```activeClass``` 标记访问过的样式

```javascript
import { NavLink } from 'react-router-dom'

<NavLink to="/about">About</NavLink>
<NavLink
  to="/faq"
  activeClassName="selected"
  
>FAQs</NavLink>

<NavLink
  to="/faq"
  activeStyle={{
    fontWeight: 'bold',
    color: 'red'
   }}
>FAQs</NavLink>

<NavLink
  exact
  to="/profile"
>Profile</NavLink>

<NavLink
  to="/events/123"
  isActive={oddEvent}
>Event 123</NavLink>

```

### Redirect 
>NOTE
>重定向

```javascript
   import { Route, Redirect } from 'react-router'
   
   <Route exact path="/" render={() => (
     loggedIn ? (
       <Redirect to="/dashboard"/>
     ) : (
       <PublicHomePage/>
     )
   )}/>
```
